import { Directive, ElementRef, HostListener, Input, Renderer2, RendererStyleFlags2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements OnInit {
  private borderColorDefault = 'transparent';

  // tslint:disable-next-line:no-input-rename
  @Input('appHighlightBorder') borderColor: string;
  private el: HTMLElement;

  constructor(el: ElementRef, private render: Renderer2) {
    this.el = el.nativeElement;
  }

  ngOnInit(): void {
    this.highlight(this.borderColorDefault);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(
      this.borderColor || this.borderColorDefault
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(this.borderColorDefault);
  }

  private highlight(color: string) {
    this.render.setStyle(this.el, 'border', '1px solid black');
    this.render.setStyle(this.el, 'border-color', color);
  }
}
