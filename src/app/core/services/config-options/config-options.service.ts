import { Injectable, InjectionToken } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  private id: string;
  private login: string;
  private email: string;
  public name = 'config service';

  setId (id: string): void {
    this.id = id;
  }

  setLogin (login: string): void {
    this.login = login;
  }

  setEmail (email: string): void {
    this.email = email;
  }
}
