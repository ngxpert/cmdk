import { Component } from '@angular/core';
import { AssignToIconComponent } from 'src/app/icons/assign-to-icon/assign-to-icon.component';
import { AssignToMeIconComponent } from 'src/app/icons/assign-to-me-icon/assign-to-me-icon.component';
import { ChangeLabelsIconComponent } from 'src/app/icons/change-labels-icon/change-labels-icon.component';
import { ChangePriorityIconComponent } from 'src/app/icons/change-priority-icon/change-priority-icon.component';
import { ChangeStatusIconComponent } from 'src/app/icons/change-status-icon/change-status-icon.component';
import { RemoveLabelIconComponent } from 'src/app/icons/remove-label-icon/remove-label-icon.component';
import { SetDueDateIconComponent } from 'src/app/icons/set-due-date-icon/set-due-date-icon.component';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
})
export class LinearComponent {
  readonly items = [
    {
      icon: AssignToIconComponent,
      label: 'Assign to...',
      shortcut: ['A'],
    },
    {
      icon: AssignToMeIconComponent,
      label: 'Assign to me',
      shortcut: ['I'],
    },
    {
      icon: ChangeStatusIconComponent,
      label: 'Change status...',
      shortcut: ['S'],
    },
    {
      icon: ChangePriorityIconComponent,
      label: 'Change priority...',
      shortcut: ['P'],
    },
    {
      icon: ChangeLabelsIconComponent,
      label: 'Change labels...',
      shortcut: ['L'],
    },
    {
      icon: RemoveLabelIconComponent,
      label: 'Remove label...',
      shortcut: ['⇧', 'L'],
    },
    {
      icon: SetDueDateIconComponent,
      label: 'Set due date...',
      shortcut: ['⇧', 'D'],
    },
  ];
}
