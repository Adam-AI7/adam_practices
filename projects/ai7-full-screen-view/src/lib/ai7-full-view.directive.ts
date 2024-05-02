// full-screen.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[fullView]'
})
export class FullViewModeDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.border='1px solid red';
    this.toggleFullScreen();
  }

  toggleFullScreen() {
    if (!document.fullscreenElement ) {
      if (this.el.nativeElement.requestFullscreen) {
        this.el.nativeElement.requestFullscreen();
      } else if (this.el.nativeElement.webkitRequestFullscreen) {
        this.el.nativeElement.webkitRequestFullscreen();
      } else if (this.el.nativeElement.mozRequestFullScreen) {
        this.el.nativeElement.mozRequestFullScreen();
      } else if (this.el.nativeElement.msRequestFullscreen) {
        this.el.nativeElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } 
    }
  }
}
