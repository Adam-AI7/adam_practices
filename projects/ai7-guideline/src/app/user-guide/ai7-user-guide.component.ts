import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'ai7-user-guid',
  template:`
  
  <div class="user-guide" [style]="getContentStyles()"  [@fadeInOut]>
  <div class="content">
    <h2>Welcome to the User Guide!</h2>
    <!-- User guide content goes here -->
    <ng-content></ng-content>
    <button>Cancel</button>
  </div>
</div>`,
  styles: [`/* user-guide.component.css */

  
  .content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  `],
   animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300)
      ])
    ])
  ]
})
export class Ai7UserGuideLineComponent {
  title = 'ai7-guideline';
  @Input('elementId')elementId='';
  guideTemplateInfo = {
    top:'0',
    left: '0',
    show:false

  };

  getContentStyles() {
    // Get the target element by its ID
    const targetElement = document.getElementById(this.elementId);
    // Check if the target element exists
    if (!targetElement) {
      console.error(`Element with ID "${this.elementId}" not found.`);
      return;
    }
    // Get the boundary rectangle of the target element
    const rect = targetElement.getBoundingClientRect();
  
    // Position the info element on top of the target element
  return {
        position:'fixed',
        top:`${rect.top -  10}px`,
        left:`${rect.left}px`
    }

  }
  
}