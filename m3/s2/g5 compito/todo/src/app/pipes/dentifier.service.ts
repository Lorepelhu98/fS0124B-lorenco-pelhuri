import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'identifier'
})
export class IdentifierPipe implements PipeTransform {
  transform(value: number, prefix: string): string {
    if (!prefix || !value) {
      return 'Invalid';
    }
    return `${prefix}_${value}`;
  }
}
