import { CmdkModule } from '@ngxpert/cmdk';
import { createOutputSpy } from 'cypress/angular';

describe('basic behavior', () => {
  beforeEach(() => {
    cy.mount(
      `<cmdk-command class="root">
    <input cmdkInput placeholder="Search…" class="input" />
    <cmdk-list class="list">
      <div *cmdkEmpty class="empty">No results.</div>
      <button cmdkItem (selected)="onSelected.emit()" class="item">
        Item
      </button>
      <button cmdkItem (selected)="onSelected.emit()" value="xxx" class="item">
        Value
      </button>
    </cmdk-list>
  </cmdk-command>`,
      {
        imports: [CmdkModule.forRoot()],
        componentProperties: {
          onSelected: createOutputSpy('onSelectedSpy'),
        },
      }
    );
  });

  it('item value is derived from textContent', () => {
    const item = cy.get(`[cmdkitem][data-value="item"]`);
    item.should('contain.text', 'Item');
  });

  it('item value prop is preferred over textContent', () => {
    const item = cy.get(`[cmdkitem][data-value="xxx"]`);
    item.should('contain.text', 'Value');
  });

  it('item selected is called on click', () => {
    const item = cy.get(`[cmdkitem][data-value="item"]`);
    item.click();
    cy.get('@onSelectedSpy').should('have.been.called');
  });

  it('first item is selected by default', () => {
    const item = cy.get(`[cmdkitem][aria-selected]`);
    item.should('contain.text', 'Item');
  });

  it('first item is selected when search changes', () => {
    const input = cy.get(`[cmdkinput]`);
    input.type('x');
    const selected = cy.get(`[cmdkitem][aria-selected]`);
    selected.should('contain.text', 'Value');
  });

  it('items filter when searching', () => {
    const input = cy.get(`[cmdkinput]`);
    input.type('x');
    const removed = cy.get('[cmdk-hidden="true"]');
    removed.should('contain.text', 'Item');
    const remains = cy.get('.cmdk-item-filtered');
    remains.should('contain.text', 'Value');
  });

  it('empty component renders when there are no results', () => {
    const input = cy.get('[cmdkinput]');
    input.type('z');
    const filteredItems = cy.get('.cmdk-item-filtered');
    filteredItems.should('have.length', 0);
    cy.get(`.cmdk-empty`).should('have.length', 1);
  });

  it('classes is applied to each part', () => {
    cy.get(`.cmdk-command`).should('have.length', 1);
    cy.get(`.cmdk-input`).should('have.length', 1);
    cy.get(`.cmdk-list`).should('have.length', 1);
    cy.get(`.cmdk-item`).should('have.length', 2);
    cy.get('[cmdkinput]').type('zzzz');
    cy.get(`.cmdk-item-filtered`).should('have.length', 0);
    cy.get(`.cmdk-empty`).should('have.length', 1);
  });
});
