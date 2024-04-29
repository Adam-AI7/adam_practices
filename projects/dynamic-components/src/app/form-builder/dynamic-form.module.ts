import { NgModule } from "@angular/core";
import {  ReactiveFormsModule } from "@angular/forms";
import { DynamicFormComponent } from "./dynamic-form.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[CommonModule, BrowserModule,ReactiveFormsModule],
    declarations:[DynamicFormComponent],
    providers:[],
    exports:[CommonModule, BrowserModule,ReactiveFormsModule,DynamicFormComponent]
})
export class DynamicModule{

}