type Props = {
  length: number;
  numberUnit: number;
  numberRoundTen: number;
  numberRoundHundred: number;
  numberRoundThousand: number;
  numberRestDigits: number;
};

export class GetNumberProps {
  static get(number: number): Props {
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
