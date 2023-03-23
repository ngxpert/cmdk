import { TestsModule } from 'src/app/tests/tests.module';

describe('props', () => {
  it('results match against custom filter', async () => {
    cy.mount("<app-props [customFilter]='true'></app-props>", {
      imports: [TestsModule],
    });
    cy.get(`[cmdkinput]`).type(`ant`);
    cy.get(`[cmdkitem]`).should('have.data', 'value', 'ant');
  });

  it('controlled value', () => {
    cy.mount('<app-props></app-props>', {
      imports: [TestsModule],
    });
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'ant'
    );
    cy.get(`[data-testid="controlledValue"]`).click();
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'anteater'
    );
  });

  it('controlled search', () => {
    cy.mount('<app-props></app-props>', {
      imports: [TestsModule],
    });
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'ant'
    );
    cy.get(`[data-testid="controlledSearch"]`).click();
    cy.get(`[cmdkitem][aria-selected="true"]`).should(
      'have.data',
      'value',
      'anteater'
    );
  });
});
