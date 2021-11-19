import { dozens, specialDozens } from '../../../core/domain/model/numbers';
import { GetNumberProps } from '../../../core/domain/utils/get-number-props';
import { LoadDozen, LoadUnit } from '../../../core/usecases/protocols';

export class LoadDozenService implements LoadDozen {
  private readonly dozens = dozens;
  private readonly specialDozens = specialDozens;

  constructor(private readonly loadUnit: LoadUnit) {}

  invoke(number: number): string {
    const hasSpecialSpelling = number >= 10 && number <= 19;
    if (hasSpecialSpelling) return this.specialDozens.data[number];
    const { roundedNumber, rest } = GetNumberProps.get(number, this.dozens.mod);
    const spelledDozen = this.dozens.data[roundedNumber];
    if (rest === 0) return spelledDozen;
    const spelledRest = this.loadUnit.invoke(rest);
    return `${spelledDozen}-${spelledRest}`;
  }
}
