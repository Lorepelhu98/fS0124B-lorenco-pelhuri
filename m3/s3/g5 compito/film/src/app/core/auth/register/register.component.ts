import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User, UserDetails } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: User = {
    id: 0,
    username: '',
    password: '',
    details: {
      name: '',
      email: ''
    },
    favorites: [],
    email: undefined,
    name: undefined
  };

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.user);
  }
}

