import { TestsModule } from 'src/app/tests/tests.module';

describe('group', async () => {
  beforeEach(() => {
    cy.mount(`<app-group></app-group>`, { imports: [TestsModule] });
  });

  it('groups are shown/hidden based on item matches', () => {
    cy.get(`[cmdkinput]`).type('z');
    cy.get(`cmdk-group[data-value="animals"]`).should('not.be.visible');
    cy.get(`cmdk-group[data-value="letters"]`).should('be.visible');
  });

  it('group can be progressively rendered', async () => {
    cy.get(`cmdk-group[data-value="numbers"]`).should('not.be.visible');
    cy.get(`[cmdk-input]`).type('t');
    cy.get(`cmdk-group[data-value="animals"]`).should('not.be.visible');
    cy.get(`cmdk-group[data-value="letters"]`).should('not.be.visible');
    cy.get(`cmdk-group[data-value="numbers"]`).should('be.visible');
  });
});
