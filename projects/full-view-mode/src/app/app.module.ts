import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ai7FullScreenViewModule } from 'ai7-full-screen-view';
// import { FullViewModeDirective } from './full-view-mode.directive';
// import { FullScreenViewerDirective } from './full-screen-view.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Ai7FullScreenViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
