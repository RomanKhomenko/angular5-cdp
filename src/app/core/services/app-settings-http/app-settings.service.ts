import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { LocalStorageService } from '..';



@Injectable()
export class AppSettingsService {
  readonly APP_SETTINGS = 'app-settings';

  constructor(
    private http: HttpClient,
    @Inject(Window) private window: Window
  ) { }

  load() {
    return this.http.get(
      this.buildUrl(),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'text'
      }
    );
  }

  private buildUrl(): string {
    return this.window.document.location.origin + '/assets/app-settings.json';
  }

}
