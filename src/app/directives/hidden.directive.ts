import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective implements OnInit  {
  @Input() appHidden: boolean;
  constructor(public el: ElementRef, public renderer: Renderer) {
  }
  ngOnInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'visibility', 'hidden');
}
}
