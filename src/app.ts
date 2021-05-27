interface WrittenNumbers {
  properties: {
    digits: number;
    mod: number;
  };
  writtenNumbers: {
    [n: number]: string;
  };
}

const units: WrittenNumbers = {
  properties: {
    digits: 1,
    mod: 1,
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

const writtenNumbersArray: Array<WrittenNumbers> = [
  units,
  uniqueDozen,
  commonDozen,
];

const getWrittenNumberOf = (n: number): string => {
  let writtenNumber: string;
  const digits = n.toString().length;

  const numbersToIterate = writtenNumbersArray.filter(
    (writtenNumber) => writtenNumber.properties.digits == digits,
  );

  writtenNumber = numbersToIterate[0].writtenNumbers[n];

  return writtenNumber;
};

export { getWrittenNumberOf };
