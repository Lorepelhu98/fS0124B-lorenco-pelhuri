import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.service';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: User): string {
    let fullName = '';

    if (user.firstName) {
      fullName += user.firstName;
    }

    if (user.lastName) {
      if (fullName) {
        fullName += ' ';
      }
      fullName += user.lastName;
    }

    return fullName || 'User no name';
  }

}
