type Props = {
  length: number;
  roundedNumber: number;
  rest: number;
};

export class GetNumberProps {
  static get(number: number, multiplier: number): Props {
    const numberAsString = number.toString();
    const length = numberAsString.length;
    const firstDigit = numberAsString.charAt(0);
    const restDigits = numberAsString.substring(1, length);
    const roundedNumber = Number(firstDigit) * multiplier;
    const rest = Number(restDigits);
    return { length, roundedNumber, rest };
  }
}
