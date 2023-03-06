import { Component } from '@angular/core';
import { Content } from '@ngneat/overview';
import { FramerIconComponent } from 'src/app/icons/framer/framer.component';
import { LinearIconComponent } from 'src/app/icons/linear-icon/linear-icon.component';
import { RaycastIconComponent } from 'src/app/icons/raycast-icon/raycast-icon.component';
import { VercelIconComponent } from 'src/app/icons/vercel-icon/vercel-icon.component';
import { Theme } from 'src/types';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  currentTheme: Theme = 'framer';
  allThemes: Array<{ label: string; icon: Content; value: Theme }> = [
    { label: 'Framer', value: 'framer', icon: FramerIconComponent },
    { label: 'Linear', value: 'linear', icon: LinearIconComponent },
    { label: 'Raycast', value: 'raycast', icon: RaycastIconComponent },
    { label: 'Vercel', value: 'vercel', icon: VercelIconComponent },
  ];

  setCurrentTheme(theme: Theme) {
    this.currentTheme = theme;
  }
}
