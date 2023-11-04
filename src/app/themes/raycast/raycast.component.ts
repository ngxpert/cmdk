import { Component } from '@angular/core';
import { SubCommandComponent } from './sub-command/sub-command.component';
import { RaycastLightIconComponent } from '../../icons/raycast-light-icon/raycast-light-icon.component';
import { HammerIconComponent } from '../../icons/hammer-icon/hammer-icon.component';
import { ClipboardIconComponent } from '../../icons/clipboard-icon/clipboard-icon.component';
import { RaycastIconComponent } from '../../icons/raycast-icon/raycast-icon.component';
import { YouTubeIconComponent } from '../../icons/you-tube-icon/you-tube-icon.component';
import { SlackIconComponent } from '../../icons/slack-icon/slack-icon.component';
import { FigmaComponent } from '../../icons/figma/figma.component';
import { LinearIconComponent } from '../../icons/linear-icon/linear-icon.component';
import { LogoComponent } from '../../icons/logo/logo.component';
import { ItemDirective } from '../../../../projects/ngneat/cmdk/src/lib/directives/item/item.directive';
import { GroupComponent } from '../../../../projects/ngneat/cmdk/src/lib/components/group/group.component';
import { EmptyDirective } from '../../../../projects/ngneat/cmdk/src/lib/directives/empty/empty.directive';
import { ListComponent } from '../../../../projects/ngneat/cmdk/src/lib/components/list/list.component';
import { InputDirective } from '../../../../projects/ngneat/cmdk/src/lib/directives/input/input.directive';
import { CommandComponent } from '../../../../projects/ngneat/cmdk/src/lib/components/command/command.component';

@Component({
    selector: 'app-raycast',
    templateUrl: './raycast.component.html',
    standalone: true,
    imports: [
        CommandComponent,
        InputDirective,
        ListComponent,
        EmptyDirective,
        GroupComponent,
        ItemDirective,
        LogoComponent,
        LinearIconComponent,
        FigmaComponent,
        SlackIconComponent,
        YouTubeIconComponent,
        RaycastIconComponent,
        ClipboardIconComponent,
        HammerIconComponent,
        RaycastLightIconComponent,
        SubCommandComponent,
    ],
})
export class RaycastComponent {
  value = 'Linear';
  setValue(value: string) {
    this.value = value;
  }
}
