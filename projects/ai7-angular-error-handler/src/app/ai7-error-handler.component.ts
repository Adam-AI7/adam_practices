import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ai7-error-handler',
  template: `<div class="error-container" [style.justify-content]="error?'start':'center'">
  <h1 class="error-message">Oops! Something went wrong...</h1>
  <button class="back-button" (click)="goBack()">Back</button>
  <div>
  {{error | json}}
  </div>
</div>
`,
  styles: [`.error-container {
    display: flex;
    justify-content:start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
  
  .error-message {
    font-size: 4rem; /* Adjust the font size as needed */
    color: red; /* Change the color to suit your design */
  }
  .back-button {
  font-size: 1rem; /* Adjust the font size as needed */
  padding: 10px 20px; /* Adjust the padding as needed */
  border: none;
  background-color: #007bff; /* Change the background color to suit your design */
  color: white; /* Change the text color to suit your design */
  border-radius: 5px; /* Adjust the border radius as needed */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
}

.back-button:hover {
  background-color: #0056b3; /* Change the background color on hover */
}

.back-button i {
  margin-right: 5px; /* Adjust the margin between icon and text */
}

  `]
})
export class Ai7ErrorHandlerComponent implements OnInit {
    @Input()error='';
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
