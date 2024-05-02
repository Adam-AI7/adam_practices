import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fullScreenViewer]'
})
export class FullScreenViewerDirective {

  @Input('fullScreenViewer') imageUrl: string='';
  private scaleFactor = 1.0; // Initial scale factor
  private readonly scaleStep = 0.1; // Scale step value
  private readonly minScale = 0.5; // Minimum scale factor
  private readonly maxScale = 3.0; // Maximum scale factor

  constructor(private elementRef: ElementRef,private renderer:Renderer2) { }
  onWheel(event: WheelEvent) {
    event.preventDefault();

    // Adjust scale factor based on wheel direction
    if (event.deltaY < 0) {
      this.scaleFactor = Math.min(this.scaleFactor + this.scaleStep, this.maxScale);
    } else {
      this.scaleFactor = Math.max(this.scaleFactor - this.scaleStep, this.minScale);
    }
    // Apply the scale transformation
    this.updateScale();
  }
  private updateScale() {
    const modalContent = document.querySelector('.modal-content');
 if(modalContent )
    (modalContent as HTMLElement).style.transform = `scale(${this.scaleFactor})`;
  }

  @HostListener('click')
  onClick() {
      let modalContent;
      const file = this.imageUrl.split('.').pop();
      if(!file)return console.log('not a valid url !');
      const fileType = file.toLocaleLowerCase();

    if (fileType === 'pdf') {
      modalContent = `<object data="${this.imageUrl}" type="application/pdf" width="100%" height="100%"><embed src="${this.imageUrl}" type="application/pdf" /></object>`;
    } else {
      modalContent = `<img src="${this.imageUrl}" style="width:100%;height:100%;" />`;
    }

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.height = '100vh';
    modal.style.width = '100vw';

    modal.innerHTML = `<div class="modal-content">${modalContent}</div>`;

    // Set background color based on browser mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.renderer.setStyle(modal, 'background-color', '#333'); // Dark mode
    } else {
      this.renderer.setStyle(modal, 'background-color', '#fff'); // Light mode
    }

    document.body.appendChild(modal);

    modal.style.display = 'block';

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.remove();
    });
    modal.addEventListener('wheel', (eve) => {
        console.log(eve);
        
        this.onWheel(eve);
      
    });
    this.scaleFactor = 1.0;
    this.updateScale();
  }
}