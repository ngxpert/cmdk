import { TestsModule } from 'src/app/tests/tests.module';

describe('arrow keybinds', async () => {
  beforeEach(() => {
    cy.mount('<app-keybindings></app-keybindings>', { imports: [TestsModule] });
  });

  test('arrow up/down changes selected item', () => {
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'first'
    );
    cy.get(`[cmdkinput]`).type('{downArrow}');
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'a'
    );
    cy.get(`[cmdkinput]`).type('{upArrow}');
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'first'
    );
  });

  test('page up/down goes to first and last item', () => {
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'first'
    );
    cy.get(`[cmdkinput]`).type('{pageDown}');
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'last'
    );
    cy.get(`[cmdkinput]`).type('{pageUp}');
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'first'
    );
  });
});
