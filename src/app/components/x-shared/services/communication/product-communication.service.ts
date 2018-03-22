import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Product } from '../../models/product.model';

@Injectable()
export class ProductCommunicationService {
  private channel = new Subject<Product>();

  // Observable string streams
  public channel$ = this.channel.asObservable();

  constructor() { }

  // Service message commands
  buy(data: Product) {
     this.channel.next(data);
  }

  removeFromCart(data: Product) {
    this.channel.next(data);
  }
}
