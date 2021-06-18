import { SpellNumber } from './SpellNumber';
import { NumberFactory } from '../number-factory/NumberFactory';

export class SpellOutNumber implements SpellNumber {
  constructor(private readonly numberFactory: NumberFactory) {}

  invokeWith(n: number): string {
    const digits = n.toString().length;
    switch (digits) {
      case 1:
        return this.numberFactory.getUnitOf(n);
      case 2:
        return this.numberFactory.getDozenOf(n);
      case 3:
        return this.numberFactory.getHundredOf(n);
      default:
        throw new Error('Number not tracked');
    }
  }
}
