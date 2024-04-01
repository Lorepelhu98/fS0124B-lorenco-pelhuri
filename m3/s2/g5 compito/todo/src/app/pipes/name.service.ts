import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.service';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(user: User): string {
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    } else if (user.firstName) {
      return `${user.firstName}`;
    } else if (user.lastName) {
      return `${user.lastName}`;
    } else {
      return 'User non a nome';
    }
  }
}
