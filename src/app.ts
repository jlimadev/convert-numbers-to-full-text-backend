interface Numbers {
  [n: number]: string;
}

const units: Numbers = {
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
};

const dozen: Numbers = {
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
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const getCardinalNumberOf = (n: number): string => {
  let cardinalNumber: string;
  const size = n.toString().length;

  switch (size) {
    case 1:
      cardinalNumber = units[n];
      break;
    case 2: {
      cardinalNumber = dozen[n];
      break;
    }
    default:
      cardinalNumber = 'Not found';
  }

  return cardinalNumber;
};

export { getCardinalNumberOf };
