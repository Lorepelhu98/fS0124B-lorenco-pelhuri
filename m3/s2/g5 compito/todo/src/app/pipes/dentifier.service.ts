import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'identifier'
})
export class IdentifierPipe implements PipeTransform {
  transform(value: number, prefix: string): string {
    if (prefix && value) {
      return `${prefix}_${value}`;
    } else {
      return 'Invalid';
    }
  }
}
