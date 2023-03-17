import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { CmdkModule } from '@ngneat/cmdk';
import { ItemComponent } from './item.component';
import { ItemAdvancedComponent } from './item-advanced.component';

@NgModule({
  declarations: [GroupComponent, ItemComponent, ItemAdvancedComponent],
  imports: [CommonModule, CmdkModule.forRoot()],
  exports: [GroupComponent, ItemComponent, ItemAdvancedComponent],
})
export class TestsModule {}
