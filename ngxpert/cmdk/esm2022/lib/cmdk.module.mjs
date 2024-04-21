import { NgModule } from '@angular/core';
import { InputDirective } from './directives/input/input.directive';
import { EmptyDirective } from './directives/empty/empty.directive';
import { CommandComponent } from './components/command/command.component';
import { GroupComponent } from './components/group/group.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { CommonModule } from '@angular/common';
import { ItemDirective } from './directives/item/item.directive';
import { A11yModule } from '@angular/cdk/a11y';
import { LoaderDirective } from './directives/loader/loader.directive';
import { ListComponent } from './components/list/list.component';
import * as i0 from "@angular/core";
const ComponentsAndDirectives = [
    CommandComponent,
    InputDirective,
    EmptyDirective,
    GroupComponent,
    SeparatorComponent,
    ItemDirective,
    LoaderDirective,
    ListComponent,
];
export class CmdkModule {
    static forRoot() {
        return {
            ngModule: CmdkModule,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.5", ngImport: i0, type: CmdkModule, imports: [CommonModule, A11yModule, CommandComponent,
            InputDirective,
            EmptyDirective,
            GroupComponent,
            SeparatorComponent,
            ItemDirective,
            LoaderDirective,
            ListComponent], exports: [CommandComponent,
            InputDirective,
            EmptyDirective,
            GroupComponent,
            SeparatorComponent,
            ItemDirective,
            LoaderDirective,
            ListComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkModule, imports: [CommonModule, A11yModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, A11yModule, ...ComponentsAndDirectives],
                    exports: ComponentsAndDirectives,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21kay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3hwZXJ0L2NtZGsvc3JjL2xpYi9jbWRrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUVqRSxNQUFNLHVCQUF1QixHQUFHO0lBQzlCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0NBQ2QsQ0FBQztBQUtGLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7SUFDSixDQUFDOzhHQUxVLFVBQVU7K0dBQVYsVUFBVSxZQUhULFlBQVksRUFBRSxVQUFVLEVBVnBDLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsY0FBYztZQUNkLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhLGFBUGIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsZUFBZTtZQUNmLGFBQWE7K0dBTUYsVUFBVSxZQUhULFlBQVksRUFBRSxVQUFVOzsyRkFHekIsVUFBVTtrQkFKdEIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLEdBQUcsdUJBQXVCLENBQUM7b0JBQy9ELE9BQU8sRUFBRSx1QkFBdUI7aUJBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2lucHV0L2lucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFbXB0eURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbXB0eS9lbXB0eS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbWFuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb21tYW5kL2NvbW1hbmQuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwL2dyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXBhcmF0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VwYXJhdG9yL3NlcGFyYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaXRlbS9pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgTG9hZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xvYWRlci9sb2FkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG5cbmNvbnN0IENvbXBvbmVudHNBbmREaXJlY3RpdmVzID0gW1xuICBDb21tYW5kQ29tcG9uZW50LFxuICBJbnB1dERpcmVjdGl2ZSxcbiAgRW1wdHlEaXJlY3RpdmUsXG4gIEdyb3VwQ29tcG9uZW50LFxuICBTZXBhcmF0b3JDb21wb25lbnQsXG4gIEl0ZW1EaXJlY3RpdmUsXG4gIExvYWRlckRpcmVjdGl2ZSxcbiAgTGlzdENvbXBvbmVudCxcbl07XG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEExMXlNb2R1bGUsIC4uLkNvbXBvbmVudHNBbmREaXJlY3RpdmVzXSxcbiAgICBleHBvcnRzOiBDb21wb25lbnRzQW5kRGlyZWN0aXZlcyxcbn0pXG5leHBvcnQgY2xhc3MgQ21ka01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q21ka01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ21ka01vZHVsZSxcbiAgICB9O1xuICB9XG59XG4iXX0=