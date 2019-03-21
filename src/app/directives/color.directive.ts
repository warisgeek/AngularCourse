import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input() appColor: any;
  constructor(public el: ElementRef, public renderer: Renderer) {

  }
  ngOnInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', this.appColor);
  }
}
