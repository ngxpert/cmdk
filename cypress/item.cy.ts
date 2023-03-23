import { TestsModule } from 'src/app/tests/tests.module';

describe('item', () => {
  beforeEach(() => {
    cy.mount(`<app-item></app-item>`, { imports: [TestsModule] });
  });

  it('mounted item matches search', () => {
    cy.get(`[cmdkinput]`).type('b');
    cy.get(`[cmdkitem]`).should('not.be.visible');
    cy.get(`[data-testid="mount"]`).click();
    cy.get(`[cmdkitem]`).should('contain.text', 'B');
  });

  it('mounted item does not match search', () => {
    cy.get(`[cmdkinput]`).type('z');
    cy.get(`[cmdkitem]`).should('not.be.visible');
    cy.get(`[data-testid="mount"]`).click();
    cy.get(`[cmdkitem]`).should('not.be.visible');
  });

  it('unmount item that is selected', () => {
    cy.get(`[data-testid="mount"]`).click();
    cy.get(`[cmdkitem][aria-selected="true"]`).should('contain.text', 'A');
    cy.get(`[data-testid="unmount"]`).click();
    cy.get(`[cmdkitem]`).should('have.length', 1);
    cy.get(`[cmdkitem][aria-selected="true"]`).should('contain.text', 'B');
  });

  it('unmount item that is the only result', () => {
    cy.get(`[data-testid="unmount"]`).click();
    cy.get(`[cmdkitem]`).should('have.length', 0);
  });

  it('mount item that is the only result', () => {
    cy.get(`[data-testid="unmount"]`).click();
    cy.get(`.cmdk-empty`).should('have.length', 1);
    cy.get(`[data-testid="mount"]`).click();
    cy.get(`.cmdk-empty`).should('have.length', 0);
    cy.get(`[cmdkitem]`).should('have.length', 1);
  });

  it('selected does not change when mounting new items', () => {
    cy.get(`[data-testid="mount"]`).click();
    cy.get(`[cmdkitem][data-value="b"]`).click();
    cy.get(`[cmdkitem][aria-selected="true"]`).should('contain.text', 'B');
    cy.get(`[data-testid="many"]`).click();
    cy.get(`[cmdkitem][aria-selected="true"]`).should('contain.text', 'B');
  });
});

describe('item advanced', () => {
  beforeEach(() => {
    cy.mount('<app-item-advanced></app-item-advanced>', {
      imports: [TestsModule],
    });
  });

  it('re-rendering re-matches implicit textContent value', () => {
    cy.get(`[cmdkitem]`).should('have.length', 2);
    cy.get(`[cmdkinput]`).type('2');
    const button = cy.get(`[data-testid="increment"]`);
    button.click();
    cy.get(`[cmdkitem]`).should('not.be.visible');
    button.click();
    cy.get(`[cmdkitem]`).should('have.length', 2);
  });
});
