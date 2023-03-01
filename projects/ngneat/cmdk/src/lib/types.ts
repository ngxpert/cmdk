import { EventEmitter } from '@angular/core';
import { Content } from '@ngneat/overview';

export interface CmdkCommandProps {
  /**
   * Accessible Label for this command menu. Not shown visibly.
   */
  ariaLabel?: string;
  /**
   * Custom filter function for whether each command menu item should matches the given search query.
   * It should return a boolean, false being hidden entirely.
   */
  filter?: ((value: string, search: string) => boolean) | null;
  /**
   * Optional controlled state of the selected command menu item.
   */
  value?: string;
  /**
   * Event handler called when the selected item of the menu changes.
   */
  valueChanged: EventEmitter<string>;
  /**
   * Optional indicator to show loader
   */
  loading?: boolean;
}

export interface CmdkGroupProps {
  /**
   * Label for this command menu. Can be shown visibly.
   */
  label?: Content;
  /**
   * Accessible Label for this command menu. Not shown visibly.
   */
  ariaLabel?: string;
}
export interface CmdkItemProps {
  /**
   * Contextual Value of the list-item
   */
  value: string | undefined;
  /**
   * Event handler called when the item is selected
   */
  selected: EventEmitter<void>;
}
