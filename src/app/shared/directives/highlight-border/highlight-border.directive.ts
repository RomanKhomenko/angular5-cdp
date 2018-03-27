import { Directive, ElementRef, HostListener, Input, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective {
  private bgColorDefault = 'lightgreen';
  private colorDefault = 'white';

  // tslint:disable-next-line:no-input-rename
  @Input('appHighlightBorder') bgColor: string;
  @Input() color: string;
  private el: HTMLElement;

  constructor(el: ElementRef, private render: Renderer2) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(
      this.bgColor || this.bgColorDefault,
      this.color || this.colorDefault
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(bgColor: string, color: string) {
    this.render.setStyle(this.el, 'background-color', bgColor);
    this.render.setStyle(this.el, 'color', color);
  }
}
