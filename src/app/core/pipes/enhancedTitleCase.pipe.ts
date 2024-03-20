import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enhancedTitleCase'
})
export class EnhancedTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const words = value.split(/\s+|-/);

    const capitalizeWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    return capitalizeWords.join(' ');
  }
}