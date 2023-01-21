import { NgModule } from '@angular/core';
import { InputDirective } from './directives/input/input.directive';
import { EmptyDirective } from './directives/empty/empty.directive';
import { GroupDirective } from './directives/group/group.directive';
import { ListDirective } from './directives/list/list.directive';
import { ListItemDirective } from './directives/list-item/list-item.directive';
import { SeparatorDirective } from './directives/separator/separator.directive';
import { CommandComponent } from './components/command/command.component';
import { DynamicViewModule } from '@ngneat/overview';

@NgModule({
  declarations: [
    CommandComponent,
    InputDirective,
    EmptyDirective,
    GroupDirective,
    ListDirective,
    ListItemDirective,
    SeparatorDirective,
  ],
  imports: [DynamicViewModule],
  exports: [
    CommandComponent,
    InputDirective,
    EmptyDirective,
    GroupDirective,
    ListDirective,
    ListItemDirective,
    SeparatorDirective,
  ],
})
export class CmdkModule {}
