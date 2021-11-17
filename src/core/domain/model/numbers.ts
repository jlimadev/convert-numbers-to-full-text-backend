type Data = string | { [n: number]: string };

export type NumbersProperties = {
  digits: number;
  mod: number;
  hasSpecialSpelling: boolean;
  data: Data;
};

const units: NumbersProperties = {
  digits: 1,
  mod: 1,
  hasSpecialSpelling: false,
  data: {
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

const uniqueDozen: NumbersProperties = {
  digits: 2,
  mod: 10,
  hasSpecialSpelling: true,
  data: {
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

const commonDozen: NumbersProperties = {
  digits: 2,
  mod: 10,
  hasSpecialSpelling: false,
  data: {
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

const hundreds: NumbersProperties = {
  digits: 3,
  mod: 100,
  hasSpecialSpelling: false,
  data: 'hundred',
};

const thousands: NumbersProperties = {
  digits: 4,
  mod: 1000,
  hasSpecialSpelling: false,
  data: 'thousand',
};

const writtenNumbersData: Array<NumbersProperties> = [
  units,
  uniqueDozen,
  commonDozen,
  hundreds,
  thousands,
];

export { writtenNumbersData };
