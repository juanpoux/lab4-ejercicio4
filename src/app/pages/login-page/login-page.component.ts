import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/models/registerUser';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  error: string | undefined;
  @Input() user: User = new User();

  constructor(private router: Router) {}

  loginUser() {
    const listUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (
      listUsers.some(
        (usr: RegisterUser) =>
          usr.userName == this.user.userName &&
          usr.password == this.user.password
      )
    ) {
      this.error = undefined;
      localStorage.setItem('user', this.user.userName);
      this.router.navigate(['home']);
    } else {
      this.error =
        'Usuario o contraseña incorrectos. Si no tiene cuenta debe registrarse';
    }
  }
}
