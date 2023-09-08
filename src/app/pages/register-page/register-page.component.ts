import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/models/registerUser';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  error: string | undefined;
  // @Input() user: User = new User();
  @Input() user: RegisterUser = new RegisterUser();

  constructor(private router: Router) {}

  registerUser() {
    const listUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (
      listUsers.some((usr: RegisterUser) => usr.userName == this.user.userName)
    ) {
      this.error = `El usuario ${this.user.userName} ya existe`;
    } else {
      listUsers.push(this.user);
      localStorage.setItem('users', JSON.stringify(listUsers));
      localStorage.setItem('user', this.user.userName);
      this.router.navigate(['home']);
    }
  }
}
