import { LoadDozen } from '../../domain/usecases/load-dozen';
import { dozens, specialDozens } from '../../domain/model/numbers';

export class LoadDozenImpl implements LoadDozen {
  private readonly dozens = dozens;

  private readonly specialDozens = specialDozens;

  loadDozen(number: number): string {
    const hasSpecialSpelling = number >= 10 && number <= 19;
    if (hasSpecialSpelling) {
      return this.specialDozens.data[number];
    }
    return '';
  }
}
