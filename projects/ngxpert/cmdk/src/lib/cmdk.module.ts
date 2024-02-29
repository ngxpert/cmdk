import { ModuleWithProviders, NgModule } from '@angular/core';
import { InputDirective } from './directives/input/input.directive';
import { EmptyDirective } from './directives/empty/empty.directive';
import { CommandComponent } from './components/command/command.component';
import { DynamicViewModule } from '@ngxpert/overview';
import { GroupComponent } from './components/group/group.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { CommonModule } from '@angular/common';
import { ItemDirective } from './directives/item/item.directive';
import { A11yModule } from '@angular/cdk/a11y';
import { LoaderDirective } from './directives/loader/loader.directive';
import { ListComponent } from './components/list/list.component';

const ComponentsAndDirectives = [
  CommandComponent,
  InputDirective,
  EmptyDirective,
  GroupComponent,
  SeparatorComponent,
  ItemDirective,
  LoaderDirective,
  ListComponent,
];
@NgModule({
    imports: [CommonModule, DynamicViewModule, A11yModule, ...ComponentsAndDirectives],
    exports: ComponentsAndDirectives,
})
export class CmdkModule {
  static forRoot(): ModuleWithProviders<CmdkModule> {
    return {
      ngModule: CmdkModule,
    };
  }
}
