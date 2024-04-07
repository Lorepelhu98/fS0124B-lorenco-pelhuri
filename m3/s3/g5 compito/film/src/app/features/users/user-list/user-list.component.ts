import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../../core/auth/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
