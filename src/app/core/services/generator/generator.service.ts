import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  private chars: string[] = [];

  constructor() {
    this.initialize();
  }

  private initialize() {
    for (let i = 48; i < 58; i++ ) {
      this.chars.push(String.fromCharCode(i));
    }

    for (let i = 65; i < 91; i++ ) {
      this.chars.push(String.fromCharCode(i));
    }

    for (let i = 97; i < 122; i++ ) {
      this.chars.push(String.fromCharCode(i));
    }
  }

  getSequance(n: number): string {
    const arr = [];

    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * this.chars.length);
      const value = this.chars[index];

      arr.push(value);
    }
    return arr.join('');
  }

}
