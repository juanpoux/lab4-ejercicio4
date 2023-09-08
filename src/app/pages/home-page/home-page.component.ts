import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  userName: string | undefined;

  constructor() {
    if (localStorage.getItem('user')) {
      this.userName = localStorage.getItem('user')?.toString();
    }
  }

  logoutUser() {
    localStorage.removeItem('user');
    this.userName = undefined;
  }
}
