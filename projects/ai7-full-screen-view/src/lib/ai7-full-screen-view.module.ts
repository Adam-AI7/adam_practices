import { NgModule } from '@angular/core';
import { FullViewModeDirective } from './ai7-full-view.directive';
import { FullScreenViewerDirective } from './ai7-full-screen-view.directive';




@NgModule({
  declarations: [
    FullViewModeDirective,FullScreenViewerDirective
  ],
  imports: [
  ],
  exports: [
    FullViewModeDirective,FullScreenViewerDirective
  ]
})
export class Ai7FullScreenViewModule { }
