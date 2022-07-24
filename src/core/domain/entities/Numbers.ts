import NumbersFactory from './NumbersFactory';

export type NumberDefinition = string | { [n: number]: string };

export type NumberProperties = {
  length: number;
  numberUnit: number;
  numberRoundTen: number;
  numberRoundHundred: number;
  numberRoundThousand: number;
  numberRestDigits: number;
};

export default class Numbers {
  private readonly units: NumberDefinition;
  private readonly specialDozens: NumberDefinition;
  private readonly dozens: NumberDefinition;
  private readonly hundred: NumberDefinition;
  private readonly thousand: NumberDefinition;
  constructor() {
    this.units = NumbersFactory.factoryUnits();
    this.specialDozens = NumbersFactory.factorySpecialDozens();
    this.dozens = NumbersFactory.factoryDozens();
    this.hundred = NumbersFactory.factoryHundred();
    this.thousand = NumbersFactory.factoryThousand();
  }

  getUnit(number: number): string {
    return this.units[number];
  }

  getDozen(number: number): string {
    const { numberRoundTen, numberRestDigits, length } = this.getNumberProperties(number);
    if (length < 2) return this.getUnit(number);
    const hasSpecialSpelling = number >= 10 && number <= 19;
    if (hasSpecialSpelling) return this.specialDozens[number];
    const spelledDozen = this.dozens[numberRoundTen];
    if (numberRestDigits === 0) return spelledDozen;
    const spelledUnit = this.getUnit(numberRestDigits);
    return `${spelledDozen}-${spelledUnit}`;
  }

  getHundred(number: number): string {
    const { numberUnit, numberRestDigits, length } = this.getNumberProperties(number);
    if (length < 3) return this.getDozen(number);
    const spelledUnit = this.getUnit(numberUnit);
    const spelledHundred = `${spelledUnit}-${this.hundred}`;
    if (numberRestDigits === 0) {
      return spelledHundred;
    } else {
      const spelledRest = this.getDozen(numberRestDigits);
      return `${spelledHundred}-${spelledRest}`;
    }
  }

  getThousand(number: number): string {
    const { numberUnit, numberRestDigits, length } = this.getNumberProperties(number);
    if (length < 4) return this.getHundred(number);
    const spelledUnit = this.getUnit(numberUnit);
    const spelledThousand = `${spelledUnit}-${this.thousand}`;
    if (numberRestDigits === 0) {
      return spelledThousand;
    } else {
      const spelledRest = this.getHundred(numberRestDigits);
      return `${spelledThousand}-${spelledRest}`;
    }
  }

  getNumberProperties(number: number): NumberProperties {
    const numberAsString = number.toString();
    const length = numberAsString.length;
    const firstDigit = Number(numberAsString.charAt(0));
    const restDigits = Number(numberAsString.substring(1, length));
    return {
      length: length,
      numberUnit: firstDigit,
      numberRoundTen: firstDigit * 10,
      numberRoundHundred: firstDigit * 100,
      numberRoundThousand: firstDigit * 1000,
      numberRestDigits: restDigits,
    };
  }
}
