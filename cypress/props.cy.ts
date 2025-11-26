import { GroupComponent } from "src/app/tests/group.component";

describe('props', () => {
  it('results match against custom filter', async () => {
    cy.mount("<app-props [customFilter]='true'></app-props>", {
      imports: [GroupComponent],
    });
    cy.get(`[cmdkinput]`).type(`ant`);
    cy.get(`[cmdkitem]`).should('have.data', 'value', 'ant');
  });

  it('controlled value', () => {
    cy.mount('<app-props></app-props>', {
      imports: [GroupComponent],
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
      imports: [GroupComponent],
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
