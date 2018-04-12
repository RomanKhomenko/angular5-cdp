import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  isSuported: boolean;

  constructor() {
    this.isSuported = typeof window['localStorage'] !== 'undefined' && window['localStorage'] != null;
  }

  setItem(key: any, value: any) {
    if (this.isSuported) {
      localStorage.setItem(key, value);
    }
  }

  getItem(key: any): any {
    if (this.isSuported) {
      return localStorage.getItem(key);
    }

    return '';
  }

  removeItem(key: any) {
    if (this.isSuported) {
      localStorage.removeItem(key);
    }
  }
}
