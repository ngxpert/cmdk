import { NgModule } from '@angular/core';
import { DialogComponent } from './components/dialog/dialog.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { InputComponent } from './components/input/input.component';
import { GroupComponent } from './components/group/group.component';
import { EmptyComponent } from './components/empty/empty.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommandComponent } from './components/command/command.component';

@NgModule({
  declarations: [
    DialogComponent,
    ListComponent,
    ListItemComponent,
    SeparatorComponent,
    InputComponent,
    GroupComponent,
    EmptyComponent,
    LoaderComponent,
    CommandComponent,
  ],
  imports: [],
  exports: [],
})
export class CmdkModule {}
