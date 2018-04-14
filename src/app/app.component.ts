import { Component, OnInit } from '@angular/core';

import { AppSettingsService, LocalStorageService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private appSettings: AppSettingsService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    const item = this.localStorageService.getItem(this.appSettings.APP_SETTINGS);
    if (item === null) {
      this.appSettings.load().subscribe(
        response => this.localStorageService.setItem(this.appSettings.APP_SETTINGS, response)
      );
    }
  }

}
