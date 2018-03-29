import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { ProductItem } from '../../models/product-item.model';

@Injectable()
export class ProductCommunicationService {
  private channel = new Subject<ProductItem>();

  // Observable string streams
  public channel$ = this.channel.asObservable();

  // Service message commands
  notify(product: ProductItem) {
     this.channel.next(product);
  }
}

