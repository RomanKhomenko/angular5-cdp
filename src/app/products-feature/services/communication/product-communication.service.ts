import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductCommunicationService {
  private channel = new Subject();

  // Observable string streams
  public channel$ = this.channel.asObservable();

  // Service message commands
  notify() {
     this.channel.next();
  }
}

