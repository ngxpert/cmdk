import { Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

/**
 * Whether the Angular module in the given path imports the specifed module class name.
 */
export const hasNgModuleImport = (
  tree: Tree,
  modulePath: string,
  className: string
): boolean => {
  const moduleFileContent = tree.read(modulePath);

  if (!moduleFileContent) {
    throw new Error(`Could not read Angular module file: ${modulePath}`);
  }

  const parsedFile = ts.createSourceFile(
    modulePath,
    moduleFileContent.toString(),
    ts.ScriptTarget.Latest,
    true
  );
  let ngModuleMetadata: ts.ObjectLiteralExpression | null = null;

  const findModuleDecorator = (node: ts.Node) => {
    if (
      ts.isDecorator(node) &&
      ts.isCallExpression(node.expression) &&
      isNgModuleCallExpression(node.expression)
    ) {
      ngModuleMetadata = node.expression
        .arguments[0] as ts.ObjectLiteralExpression;

      return;
    }

    ts.forEachChild(node, findModuleDecorator);
  };

  ts.forEachChild(parsedFile, findModuleDecorator);

  if (ngModuleMetadata) {
    for (const property of (ngModuleMetadata as ts.ObjectLiteralExpression)
      .properties) {
      if (
        !ts.isPropertyAssignment(property) ||
        property.name.getText() !== 'imports' ||
        !ts.isArrayLiteralExpression(property.initializer)
      ) {
        continue;
      }

      if (
        property.initializer.elements.some((element) =>
          element.getText().includes(className)
        )
      ) {
        return true;
      }
    }
  } else {
    throw new Error(
      `Could not find NgModule declaration inside: "${modulePath}"`
    );
  }
  return false;
};

/**
 * Resolves the last identifier that is part of the given expression. This helps resolving
 * identifiers of nested property access expressions (e.g. myNamespace.core.NgModule).
 */
const resolveIdentifierOfExpression = (
  expression: ts.Expression
): ts.Identifier | null => {
  if (ts.isIdentifier(expression)) {
    return expression;
  } else if (ts.isPropertyAccessExpression(expression)) {
    return resolveIdentifierOfExpression(expression.expression);
  }

  return null;
};

/** Whether the specified call expression is referring to a NgModule definition. */
const isNgModuleCallExpression = (
  callExpression: ts.CallExpression
): boolean => {
  if (
    !(callExpression.arguments && callExpression.arguments.length) ||
    !ts.isObjectLiteralExpression(callExpression.arguments[0])
  ) {
    return false;
  }

  const decoratorIdentifier = resolveIdentifierOfExpression(
    callExpression.expression
  );

  return decoratorIdentifier ? decoratorIdentifier.text === 'NgModule' : false;
};
