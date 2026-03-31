import { Pipe, PipeTransform } from '@angular/core';

// truncate скорочує текст до певної довжини і додає в кінці "..."
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  // trail - це те, що буде додано в кінці тексту, якщо він буде скорочений
  transform(value: string, limit: number = 20, trail: string = '...'): string {
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
