import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  isSuported: boolean;

  constructor() {
    this.isSuported = typeof window['localStorage'] !== 'undefined' && window['localStorage'] != null;
  }

  setItem() {
    if (this.isSuported) {
      localStorage.setItem('', '');
    }
  }

  getItem() {
    if (this.isSuported) {
      localStorage.getItem('');
    }
  }

  removeItem() {
    if (this.isSuported) {
      localStorage.removeItem('');
    }
  }
}
