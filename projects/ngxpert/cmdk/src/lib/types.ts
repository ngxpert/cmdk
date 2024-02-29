import { EventEmitter } from '@angular/core';
import { Content } from '@ngxpert/overview';

export interface CmdkCommandProps {
  /**
   * Accessible Label for this command menu. Not shown visibly.
   */
  ariaLabel?: string;
  /**
   * Custom filter function for whether each command menu item should matches the given search query.
   * It should return a boolean, false being hidden entirely. You can pass null to disable default filtering.
   * @default
   */
  filter?: ((value: string, search: string) => boolean) | null | undefined;
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
  /**
   * Optionally set to `true` to turn on looping around when using the arrow keys.
   */
  loop?: boolean;
}

export interface CmdkGroupProps {
  /**
   * Label for this command menu.
   */
  label?: Content;
  /**
   * Accessible Label for this command menu. Not shown visibly.
   */
  ariaLabel?: string;
}

export interface CmdkListProps extends Omit<CmdkGroupProps, 'label'> {}
export interface CmdkItemProps {
  /**
   * Contextual Value of the list-item
   */
  value: string | undefined;
  /**
   * Contextually mark the item as disabled. Keyboard navigation will skip this item.
   */
  disabled?: boolean;
  /**
   * Event handler called when the item is selected
   */
  selected: EventEmitter<void>;
}

export interface CmdkInputProps {
  /**
   * Optional indicator to provide event listener when filtering should happen
   * @default input
   */
  updateOn?: 'blur' | 'change' | 'input';
}