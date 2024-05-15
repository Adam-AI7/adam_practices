import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ai7ErrorHandlerComponent } from './ai7-error-handler.component';

@NgModule({
  declarations: [
    AppComponent,Ai7ErrorHandlerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
