import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ai7UserGuideLineComponent } from './ai7-user-guide.component';


@NgModule({
  declarations: [
    Ai7UserGuideLineComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[Ai7UserGuideLineComponent],
  providers: [],
})
export class UserGuideModule { }