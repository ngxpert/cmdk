<p align="center">
 <img width="20%" height="20%" src="./src/assets/ngneat%20cdk.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](./LICENSE)
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/ngneat/cmdk/compare)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![ngneat-lib](https://img.shields.io/badge/made%20with-%40ngneat%2Flib-ad1fe3?logo=angular)](https://github.com/ngneat/lib)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Fast, composable, unstyled command menu for Angular. Directly inspired from [pacocoursey/cmdk](https://github.com/pacocoursey/cmdk)

# @ngneat/cmdk

@ngneat/cmdk is a command menu Angular component that can also be used as an accessible combobox. You render items, it filters and sorts them automatically. @ngneat/cmdk supports a fully composable API, so you can wrap items in other components or even as static HTML.

Demo and examples: [ngneat.github.io/cmdk]([ngneat.github.io/cmdk)

## Features

- 🎨 Un-styled, so that you can provide your own styles easily
- 🥙 Provides wrapper, so that you can pass your own template, component or static HTML
- 🔍 Default filtering present
- 🖼️ [Drop in stylesheet](#drop-in-stylesheets) themes provided
- ♿ Accessible

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

## Installation

### Angular CLI

```bash
ng add @ngneat/cmdk
```

### NPM

```bash
# First, install dependencies
npm install @ngneat/overview @ngneat/until-destroy @angular/cdk

npm install @ngneat/cmdk
```

### Yarn

```bash
# First, install dependencies
yarn add @ngneat/overview @ngneat/until-destroy @angular/cdk

yarn add @ngneat/cmdk
```

## Usage

### 1. Import in module

```ts
import { CmdkModule } from '@ngneat/cmdk';

@NgModule({
  imports: [
    CmdkModule,
  ],
})
export class AppModule {}
```

### 2. Start using it

```html
<cmdk-command>
  <input cmdkInput />
  <div *cmdkEmpty>No results found.</div>
  <cmdk-list>
    <cmdk-group label="Letters">
      <button cmdkItem>a</button>
      <button cmdkItem>b</button>
      <cmdk-separator></cmdk-separator>
      <button cmdkItem>c</button>
    </cmdk-group>
  </cmdk-list>

  <button cmdkItem>Apple</button>
</cmdk-command>
```

## Components

Each component has a specific class (starting with `cmdk-`) that can be used for styling.

### Command

Render this to show the command menu.

| Selector       | Class           |
| -------------- | --------------- |
| `cmdk-command` | `.cmdk-command` |

#### Properties

| Name                                                             | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@Input() ariaLabel: string`                                     | Accessible Label for this command menu. Not shown visibly.                                                                                                                                                                                                                                               |
| `@Input() filter?: ((value: string, search: string) => boolean)` | Custom filter function for whether each command menu item should matches the given search query. It should return a `boolean`, false being hidden entirely. You can pass `null` to disable default filtering. <br>***Default: `(value, search) => value.toLowerCase().includes(search.toLowerCase())`*** |
| `@Input() value?: string`                                        | Optional controlled state of the selected command menu item.                                                                                                                                                                                                                                             |
| `@Input() loading?: boolean`                                     | Optional indicator to show loader                                                                                                                                                                                                                                                                        |
| `@Input() loop?: boolean`                                        | Optionally set to `true` to turn on looping around when using the arrow keys.                                                                                                                                                                                                                            |
| `@Output() valueChanged: EventEmitter<string>`                   | Event handler called when the selected item of the menu changes.                                                                                                                                                                                                                                         |

### Input

Render this to show the command input.

| Selector           | Class         |
| ------------------ | ------------- |
| `input[cmdkinput]` | `.cmdk-input` |

#### Properties

| Name                                                                  | Description                                                                                          |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <code>@Input() updateOn: 'blur' &#124; 'change' &#124; 'input'</code> | Optional indicator to provide event listener when filtering should happen.<br>***Default: `input`*** |

### List

Contains items and groups.

| Selector    | Class        |
| ----------- | ------------ |
| `cmdk-list` | `.cmdk-list` |

Lists will not unmount from the DOM, rather the `cmdk-hidden` attribute is applied to hide it from view. This may be relevant in your styling.

Animate height using the `--cmdk-list-height` CSS variable.

```css
.cmdk-list {
  min-height: 300px;
  height: var(--cmdk-list-height);
  max-height: 500px;
  transition: height 100ms ease;
}
```

To scroll item into view earlier near the edges of the viewport, use scroll-padding:

```css
.cmdk-list {
  scroll-padding-block-start: 8px;
  scroll-padding-block-end: 8px;
}
```

#### Properties

| Name                          | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| `@Input() ariaLabel?: string` | Accessible Label for this command menu. Not shown visibly. |

### Item

Item that becomes active on pointer enter. You should provide a unique `value` for each item, but it will be automatically inferred from the `.textContent`.

Items will not unmount from the DOM, rather the `cmdk-hidden` attribute is applied to hide it from view. This may be relevant in your styling.

| State                 | Selector                    | Class                 |
| --------------------- | --------------------------- | --------------------- |
| Default               | `[cmdkItem]`                | `.cmdk-item`          |
| Active                | `[cmdkItem][aria-selected]` | `.cmdk-item-active`   |
| Filtered              | `[cmdkItem]`                | `.cmdk-item-filtered` |
| Disabled              | `[cmdkItem]`                | `.cmdk-item-disabled` |
| Hidden (not-filtered) | `[cmdkItem][cmdk-hidden]`   | ``                    |

#### Properties

| Name                                         | Description                                                                      |
| -------------------------------------------- | -------------------------------------------------------------------------------- |
| <code>value: string &#124; undefined;</code> | Contextual Value of the list-item                                                |
| `@Input() disabled: boolean`                 | Contextually mark the item as disabled. Keyboard navigation will skip this item. |
| `@Input() filtered: boolean`                 | Contextually mark the item as filtered.                                          |
| `@Output() selected: EventEmitter<void>`     | Event handler called when the item is selected                                   |

### Group

Groups items together with the given label (`.cmdk-group-label`).

| Selector     | Class         |
| ------------ | ------------- |
| `cmdk-group` | `.cmdk-group` |

Groups will not unmount from the DOM, rather the `cmdk-hidden` attribute is applied to hide it from view. This may be relevant in your styling.

#### Properties

| Name                          | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| `@Input() label: Content`     | Label for this command group. Can be HTML string           |
| `@Input() ariaLabel?: string` | Accessible Label for this command menu. Not shown visibly. |

### Empty

Automatically renders when there are no results for the search query.

| Selector     | Class         |
| ------------ | ------------- |
| `*cmdkEmpty` | `.cmdk-empty` |

### Loader

This will be conditionally renderer when you pass `loading=true` with `cmdk-command`

| Selector      | Class          |
| ------------- | -------------- |
| `*cmdkLoader` | `.cmdk-loader` |

## Examples

Code snippets for common use cases.

### Nested items

Often selecting one item should navigate deeper, with a more refined set of items. For example selecting "Change theme…" should show new items "Dark theme" and "Light theme". We call these sets of items "pages", and they can be implemented with simple state:

```html
<cmdk-command (keydown)="onKeyDown($event)">
  <input cmdkInput (input)="setSearch($event)" />
  <ng-container *ngIf="!page">
    <button cmdkItem (selected)="setPages('projects')">Search projects...</button>
    <button cmdkItem (selected)="setPages('teams')">Join a team...</button>
  </ng-container>
  <ng-container *ngIf="page === 'projects'">
    <button cmdkItem>Project A</button>
    <button cmdkItem>Project B</button>
  </ng-container>
  <ng-container *ngIf="page === 'teams'">
    <button cmdkItem>Team 1</button>
    <button cmdkItem>Team 2</button>
  </ng-container>
</cmdk-command>
```

```ts
pages: Array<string> = [];
search = '';

get page() {
  return this.pages[this.pages.length - 1];
}

onKeyDown(e: KeyboardEvent) {
  // Escape goes to previous page
  // Backspace goes to previous page when search is empty
  if (e.key === 'Escape' || (e.key === 'Backspace' && !this.search)) {
    e.preventDefault();
    this.pages = this.pages.slice(0, -1);
  }
}

setSearch(ev: Event) {
  this.search = (ev.target as HTMLInputElement)?.value;
}

setPages(page: string) {
  this.pages.push(page);
}
```

### Asynchronous results

Render the items as they become available. Filtering and sorting will happen automatically.

```html
<cmdk-command [loading]="loading">
  <input cmdkInput />
  <div *cmdkLoader>Fetching words...</div>
  <button cmdkItem *ngFor="let item of items" [value]="item">
    {{item}}
  </button>
</cmdk-command>
```

```ts
loading = false;

getItems() {
  this.loading = true;
  setTimeout(() => {
    this.items = ['A', 'B', 'C', 'D'];
    this.loading = false;
  }, 3000);
}
```

### Use inside Popover

We recommend using the [Angular CDK Overlay](https://material.angular.io/cdk/overlay/overview). @ngneat/cdk relies on the Angular CDK, so this will reduce your bundle size a bit due to shared dependencies.

First, configure the trigger component:

```html
<button (click)="isDialogOpen = !isDialogOpen" cdkOverlayOrigin #trigger="cdkOverlayOrigin" [attr.aria-expanded]="isDialogOpen">
  Actions
      <kbd>⌘</kbd>
      <kbd>K</kbd>
</button>
<ng-template
  cdkConnectedOverlay
  [cdkConnectedOverlayOrigin]="trigger"
  [cdkConnectedOverlayOpen]="isDialogOpen"
>
  <app-sub-command-dialog [value]="value"></app-sub-command-dialog>
</ng-template>
```

```ts
isDialogOpen = false;

listener(e: KeyboardEvent) {
  if (e.key === 'k' && (e.metaKey || e.altKey)) {
    e.preventDefault();
    if (this.isDialogOpen) {
      this.isDialogOpen = false;
    } else {
      this.isDialogOpen = true;
    }
  }
}

ngOnInit() {
  document.addEventListener('keydown', (ev) => this.listener(ev));
}

ngOnDestroy() {
  document.removeEventListener('keydown', (ev) => this.listener(ev));
}
```

Then, render the `cmdk-command` inside CDK Overlay content:

```html
<div class="cmdk-submenu">
  <cmdk-command>
    <cmdk-list>
      <cmdk-group [label]="value">
        <button cmdkItem *ngFor="let item of items" [value]="item.label">
          {{ item.label }}
        </button>
      </cmdk-group>
    </cmdk-list>
    <input cmdkInput #input placeholder="Search for actions..." />
  </cmdk-command>
</div>
```

```ts
readonly items: Array<{ label: string }> = [
  {
    label: 'Open Application',
  },
  {
    label: 'Show in Finder',
  },
  {
    label: 'Show Info in Finder',
  },
  {
    label: 'Add to Favorites',
  },
];

ngAfterViewInit() {
  this.input.nativeElement.focus();
}
```

### Drop in stylesheets

You can find global stylesheets to drop in as a starting point for styling. See [ngneat/cmdk/styles](./projects/ngneat/cmdk/styles) for examples.

You can include the `SCSS` stylesheet in your application's style file:

```scss
// Global is needed for any theme
@use "~@ngneat/cdk/styles/scss/globals";

// Then add theme
@use "~@ngneat/cdk/styles/scss/framer";
// @use "~@ngneat/cdk/styles/scss/vercel";
// @use "~@ngneat/cdk/styles/scss/linear";
// @use "~@ngneat/cdk/styles/scss/raycast";
```

or, use pre-built `CSS` file in `angular.json`

```json
// ...
"styles": [
  "...",
  "node_modules/@ngneat/cdk/styles/globals.css"
  "node_modules/@ngneat/cdk/styles/framer.css"
],
// ...
```

## FAQ

**Accessible?** Yes. Labeling, aria attributes, and DOM ordering tested with Voice Over and Chrome DevTools.

**Virtualization?** No. Good performance up to 2,000-3,000 items, though. Read below to bring your own.

**Filter/sort items manually?** Yes. Pass `filter={yourFilter}` to [Command](#command). Better memory usage and performance. Bring your own virtualization this way.

**Unstyled?** Yes, use the listed CSS selectors.

**Weird/wrong behavior?** Make sure your `[cdkItem]` has a unique `value`.

**Listen for ⌘K automatically?** No, do it yourself to have full control over keybind context.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/pacocoursey"><img src="https://avatars.githubusercontent.com/u/34928425?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paco</b></sub></a><br /><a href="#design-pacocoursey" title="Design">🎨</a> <a href="https://github.com/@ngneat/cmdk/commits?author=pacocoursey" title="Documentation">📖</a> <a href="#ideas-pacocoursey" title="Ideas, Planning, & Feedback">🤔</a> <a href="#research-pacocoursey" title="Research">🔬</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!