import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.service';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(user: User): string {
    if (!user.firstName && !user.lastName) {
      return 'User non a nome';
    }
    return `${user.firstName || ''} ${user.lastName || ''}`.trim();
  }
}
