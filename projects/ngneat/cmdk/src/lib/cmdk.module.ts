import { NgModule } from '@angular/core';
import { InputDirective } from './directives/input/input.directive';
import { EmptyDirective } from './directives/empty/empty.directive';
import { CommandComponent } from './components/command/command.component';
import { DynamicViewModule } from '@ngneat/overview';
// import { ListComponent } from './components/list/list.component';
import { GroupComponent } from './components/group/group.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    CommandComponent,
    InputDirective,
    EmptyDirective,
    // ListComponent,
    GroupComponent,
    SeparatorComponent,
    ItemComponent,
  ],
  imports: [CommonModule, DynamicViewModule],
  exports: [
    CommandComponent,
    InputDirective,
    EmptyDirective,
    // ListComponent,
    GroupComponent,
    SeparatorComponent,
    ItemComponent,
  ],
})
export class CmdkModule {}
