import { Directive, HostListener, ElementRef, Renderer2,HostBinding, } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {
  @HostListener('mouseenter') OnMouseOver(){
    /* this.renderer2.setStyle(this.elementRef.nativeElement,'background-color','yellow') */

    this.backgroundColor='yellow'
  }
  @HostListener('mouseout') OnMouseLeave(){
    /* this.renderer2.setStyle(this.elementRef.nativeElement,'background-color','white') */
    
    this.backgroundColor='white'
  }

  /* @HostBinding('style.backgroundColor') backgroundColor: any */

  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra
    return this.backgroundColor
  }
  private backgroundColor: any

  constructor(private elementRef: ElementRef, private renderer2:Renderer2) { }

}
