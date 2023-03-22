import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { CmdkModule } from '@ngneat/cmdk';
import { ItemComponent } from './item.component';
import { ItemAdvancedComponent } from './item-advanced.component';
import { KeybindingsComponent } from './keybindings.component';
import { PropsComponent } from './props.component';

@NgModule({
  declarations: [
    GroupComponent,
    ItemComponent,
    ItemAdvancedComponent,
    KeybindingsComponent,
    PropsComponent,
  ],
  imports: [CommonModule, CmdkModule.forRoot()],
  exports: [
    GroupComponent,
    ItemComponent,
    ItemAdvancedComponent,
    KeybindingsComponent,
    PropsComponent,
  ],
})
export class TestsModule {}
