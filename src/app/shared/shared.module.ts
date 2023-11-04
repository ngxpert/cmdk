import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { IconsModule } from '../icons/icons.module';

const COMPONENTS = [CodeBlockComponent];

@NgModule({
    imports: [CommonModule, IconsModule, ...COMPONENTS],
    exports: COMPONENTS,
})
export class SharedModule {}
