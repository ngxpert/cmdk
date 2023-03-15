import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { CmdkModule } from '@ngneat/cmdk';

@NgModule({
  declarations: [GroupComponent],
  imports: [CommonModule, CmdkModule.forRoot()],
  exports: [GroupComponent],
})
export class TestsModule {}
