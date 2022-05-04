import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlteraCor]'
})
export class AlteraCorDirective {

  constructor(private elementRef:ElementRef, private renderer2:Renderer2 ) { 
    //Esse modelo deve ser envitado, pois estamos alterando a tag do DOM
    //console.log(this.elementRef.nativeElement.style.backgroundColor='yellow')

    this.renderer2.setStyle(this.elementRef.nativeElement,'background-color','green')
  }

}
