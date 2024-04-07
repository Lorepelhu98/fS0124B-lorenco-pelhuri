import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { User } from '../../core/auth/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }
}
