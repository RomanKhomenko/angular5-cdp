import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

import { ProductItem } from '../../../models/product-item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements AfterViewInit {
  @Input() product: ProductItem;
  @Output() buy: EventEmitter<ProductItem> = new EventEmitter();

  @ViewChild('buyButton')
  buttonElement: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    if (this.product.count === 0) {
      this.renderer.setAttribute(this.buttonElement.nativeElement, 'disabled', 'disabled');
    }
 }

  onBuy($event) {
    console.log(`Click ${this.product.name}`);
    this.buy.emit(this.product);
  }

  isDisabled(): boolean {
    return this.product.count < 1;
  }
}
