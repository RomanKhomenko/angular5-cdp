import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  isAdminLoggedIn = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.authService.isLoggedIn$.subscribe((value: boolean) => {
      this.isAdminLoggedIn = value && this.authService.isAdmin();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
