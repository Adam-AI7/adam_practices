import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

type dControl = {
  tag: 'text' | 'email' | 'password' | 'select' | 'textarea' | 'checkbox' | 'radio' |'custom',
  "type":string,
  "name":string,
  "label": string,
  "placeholder": string,
  "required": true,
  answers: string,
  icon:string,
  disable:string,
  id:string,
  style:string,
  class:string

  events:string[],
}
type dInputControl=dControl & {
  validation: ValidatorFn[],
} 
type dSelectControl = dInputControl &{

}
@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <ng-container *ngFor="let field of fields">
        <ng-container [ngSwitch]="field.type">
          <div *ngSwitchCase="'text'">
            <label>{{ field.label }}</label>
            <input type="text" [formControlName]="field.name" [placeholder]="field.placeholder">
          </div>
          <div *ngSwitchCase="'email'">
            <label>{{ field.label }}</label>
            <input type="email" [formControlName]="field.name" [placeholder]="field.placeholder">
          </div>
          <div *ngSwitchCase="'password'">
            <label>{{ field.label }}</label>
            <input type="password" [formControlName]="field.name" [placeholder]="field.placeholder">
          </div>
          <div *ngSwitchCase="'select'">
            <label>{{ field.label }}</label>
            <select [formControlName]="field.name">
              <option *ngFor="let option of field.options" [value]="option.value">{{ option.label }}</option>
            </select>
          </div>
          <div *ngSwitchCase="'textarea'">
            <label>{{ field.label }}</label>
            <textarea [formControlName]="field.name" [placeholder]="field.placeholder"></textarea>
          </div>
          <div *ngSwitchCase="'checkbox'">
            <label>{{ field.label }}</label>
            <div *ngFor="let option of field.options">
              <input type="checkbox" [formControlName]="field.name" [value]="option.value"> {{ option.label }}
            </div>
          </div>
          <div *ngSwitchCase="'radio'">
            <label>{{ field.label }}</label>
            <div *ngFor="let option of field.options">
              <input type="radio" [formControlName]="field.name" [value]="option.value"> {{ option.label }}
            </div>
          </div>
        </ng-container>
      </ng-container>
      <button type="submit">Submit</button>
    </form>
  `
})
export class DynamicFormComponent {
  @Input() formData: any;
  form!: FormGroup;
  fields!: any[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fields = this.formData.fields;
    const formGroup:any = {};
    this.fields.forEach(field => {
      formGroup[field.name] = field.required ? ['', Validators.required] : [''];
    });
    this.form = this.fb.group(formGroup);
  }

  onSubmit() {
    if (this.form.valid) {
      // Do something with the form data
      console.log(this.form.value);
    } else {
      // Handle form validation errors
      console.error('Form validation failed.');
    }
  }
}
