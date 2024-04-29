import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicModule } from './form-builder/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
