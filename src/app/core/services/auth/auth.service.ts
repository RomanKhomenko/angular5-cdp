import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LocalStorageService } from '..';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthService {
  public isLoggedIn$ = new BehaviorSubject(false);

  constructor(
    private localStorage: LocalStorageService
  ) { }

  login (value: string): Promise<boolean> {
    this.localStorage.setItem('user', value);
    this.logIn(true);

    return Promise.resolve(null);
  }

  loginOut (): void {
    this.localStorage.removeItem('user');
    this.logIn(false);
  }

  getUser (): string {
    return this.localStorage.getItem('user');
  }

  isAdmin (): boolean {
    return this.localStorage.getItem('user') === 'admin';
  }

  private logIn (value: boolean): void {
    this.isLoggedIn$.next(value);
  }
}
