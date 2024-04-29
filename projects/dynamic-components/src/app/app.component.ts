import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-components';
  formConfig ={
    "fields": [
      {
        "type": "text",
        "name": "firstName",
        "label": "First Name",
        "placeholder": "Enter your first name",
        "required": true
      },
      {
        "type": "email",
        "name": "email",
        "label": "Email",
        "placeholder": "Enter your email address",
        "required": true
      },
      {
        "type": "password",
        "name": "password",
        "label": "Password",
        "placeholder": "Enter your password",
        "required": true
      },
      {
        "type": "select",
        "name": "gender",
        "label": "Gender",
        "options": [
          { "label": "Male", "value": "male" },
          { "label": "Female", "value": "female" },
          { "label": "Other", "value": "other" }
        ],
        "required": true
      },
      {
        "type": "textarea",
        "name": "bio",
        "label": "Bio",
        "placeholder": "Enter your bio",
        "required": false
      },
      {
        "type": "checkbox",
        "name": "skills",
        "label": "Skills",
        "options": [
          { "label": "JavaScript", "value": "js" },
          { "label": "Angular", "value": "angular" },
          { "label": "React", "value": "react" }
        ],
        "required": false
      },
      {
        "type": "radio",
        "name": "newsletter",
        "label": "Subscribe to Newsletter",
        "options": [
          { "label": "Yes", "value": true },
          { "label": "No", "value": false }
        ],
        "required": false
      }
    ]
  }
  ;

}
