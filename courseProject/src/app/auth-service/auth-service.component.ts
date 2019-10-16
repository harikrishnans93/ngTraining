import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService, AuthResponseData } from './auth-service.service';
import { AuthModel } from '../shared/authmodel.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-service',
  templateUrl: './auth-service.component.html',
  styleUrls: ['./auth-service.component.css']
})
export class AuthServiceComponent implements OnInit {
  isLogin = false;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  onAuthenticating(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let authobs: Observable<AuthResponseData>;
    this.isLoading = true;
    const authdata: AuthModel = new AuthModel(form.value.email, form.value.password, true);
    console.log(form.value);
    if (this.isLogin) {
      authobs = this.authService.signIn(authdata);
    } else {
      authobs = this.authService.signUp(authdata);
    }
    authobs.subscribe(responseData => {
      console.log(responseData);

      this.router.navigate(['/shoppingList']);
    }, errorData => {
      console.log(errorData);
      this.error = errorData;
      this.isLoading = false;
    });
    form.reset();
    this.isLogin = !this.isLogin;
  }
  onswitching() {
    this.isLogin = !this.isLogin;
  }

}
