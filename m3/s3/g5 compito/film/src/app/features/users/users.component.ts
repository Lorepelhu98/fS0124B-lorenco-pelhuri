import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../../core/auth/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}

