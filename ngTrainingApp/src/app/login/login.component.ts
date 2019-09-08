import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  constructor() { }

  ngOnInit() {
  }
  getUserNameStatus() {
    return this.userName === '';
  }
  clearUser(event: Event) {
    this.userName = '';

  }
}
