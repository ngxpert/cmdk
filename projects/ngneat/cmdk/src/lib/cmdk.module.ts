import { NgModule } from '@angular/core';
import { InputDirective } from './directives/input/input.directive';
import { EmptyDirective } from './directives/empty/empty.directive';
import { CommandComponent } from './components/command/command.component';
import { DynamicViewModule } from '@ngneat/overview';
import { GroupComponent } from './components/group/group.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { CommonModule } from '@angular/common';
import { ItemDirective } from './directives/item/item.directive';

@NgModule({
  declarations: [
    CommandComponent,
    InputDirective,
    EmptyDirective,
    GroupComponent,
    SeparatorComponent,
    ItemDirective,
  ],
  imports: [CommonModule, DynamicViewModule],
  exports: [
    CommandComponent,
    InputDirective,
    EmptyDirective,
    GroupComponent,
    SeparatorComponent,
    ItemDirective,
  ],
})
export class CmdkModule {}
