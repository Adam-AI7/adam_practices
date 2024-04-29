import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserGuideModule } from './user-guide/user-guide.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,UserGuideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
