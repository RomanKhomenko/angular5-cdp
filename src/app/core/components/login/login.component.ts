import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  isLoggedIn = false;
  selectMapping = {
    'user': 'User',
    'admin': 'Admin'
  };

  @ViewChild('userType')
  userType: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.authService.isLoggedIn$.subscribe((value: boolean) => {
      this.isLoggedIn = value;
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getSelectKeys () {
    return Object.keys(this.selectMapping);
  }

  login () {
    this.authService.login(this.userType.nativeElement.value).then(() => {
        const user = this.authService.getUser();

        if (user === 'admin') {
          this.router.navigate(['/admin']);
        }
      }
    );
  }

  user() {
    return this.authService.getUser();
  }

  logout () {
    this.authService.loginOut();
  }


}
