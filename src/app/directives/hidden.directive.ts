import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {
  @Input() appHidden: boolean;
  constructor(public el: ElementRef, public renderer: Renderer) {
    
  }
  ngOnInit(){
    this.renderer.setElementStyle(this.el.nativeElement, 'visibility', 'hidden');
}
}
