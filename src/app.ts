interface WrittenNumbers {
  properties: {
    digits: number;
    mod: number;
    isSpecial: boolean;
  };
  writtenNumbers: {
    [n: number]: string;
  };
}

const units: WrittenNumbers = {
  properties: {
    digits: 1,
    mod: 1,
    isSpecial: false,
  },
  writtenNumbers: {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  },
};

const uniqueDozen: WrittenNumbers = {
  properties: {
    digits: 2,
    mod: 10,
    isSpecial: true,
  },
  writtenNumbers: {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  },
};

const commonDozen: WrittenNumbers = {
  properties: {
    digits: 2,
    mod: 10,
    isSpecial: false,
  },
  writtenNumbers: {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  },
};

const hundreds: WrittenNumbers = {
  properties: {
    digits: 3,
    mod: 100,
    isSpecial: false,
  },
  writtenNumbers: {
    0: 'hundred',
  },
};

const writtenNumbersArray: Array<WrittenNumbers> = [
  units,
  uniqueDozen,
  commonDozen,
  hundreds,
];

const getWrittenNumberOf = (n: number): string => {
  let spelledOutNumber: string;
  const numberAsString = n.toString();
  const digits = numberAsString.length;

  const foundNumbers = writtenNumbersArray.filter(
    (writtenNumber) => writtenNumber.properties.digits == digits,
  );

  switch (digits) {
    case 1:
      spelledOutNumber = foundNumbers[0].writtenNumbers[n];
      break;
    case 2: {
      if (n >= 10 && n < 20) {
        const specialNumbers = foundNumbers.find(
          (numbers) => numbers.properties.isSpecial,
        );
        spelledOutNumber = specialNumbers.writtenNumbers[n];
        break;
      }
      const regularNumbers = foundNumbers.find(
        (numbers) => !numbers.properties.isSpecial,
      );

      if (n % regularNumbers.properties.mod === 0) {
        spelledOutNumber = regularNumbers.writtenNumbers[n];
        break;
      } else {
        const lastDigit = Number(numberAsString.substring(digits - 1, digits));
        const dozen =
          Number(numberAsString.charAt(0)) * regularNumbers.properties.mod;
        const word = getWrittenNumberOf(Number(lastDigit));
        spelledOutNumber = `${regularNumbers.writtenNumbers[dozen]}-${word}`;
        break;
      }
    }
    case 3: {
      const regularNumbers = foundNumbers.find(
        (numbers) => numbers.properties.digits === digits,
      );

      if (n % regularNumbers.properties.mod === 0) {
        spelledOutNumber = getHundredOf(n);
        break;
      } else {
        const lastDigits = Number(numberAsString.substring(digits - 2, digits));
        const nHundred =
          Number(numberAsString.charAt(0)) * regularNumbers.properties.mod;
        const hundred = getHundredOf(nHundred);
        const word = getWrittenNumberOf(Number(lastDigits));
        spelledOutNumber = `${hundred} (and) ${word}`;
        break;
      }
    }
    default:
      break;
  }

  return spelledOutNumber;
};

const getHundredOf = (n: number): string => {
  const hundreds = writtenNumbersArray.find(
    (numbers) => numbers.properties.digits === 3,
  );

  const numberAsString = n.toString();
  const firstDigit = Number(numberAsString.charAt(0));
  const unit = units.writtenNumbers[firstDigit];
  return `${unit} ${hundreds.writtenNumbers[0]}`;
};

export { getWrittenNumberOf };
