import INumbersProperties from './INumbersProperties';

const units: INumbersProperties = {
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

const uniqueDozen: INumbersProperties = {
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

const commonDozen: INumbersProperties = {
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

const hundreds: INumbersProperties = {
  properties: {
    digits: 3,
    mod: 100,
    isSpecial: false,
  },
  writtenNumbers: {
    0: 'hundred',
  },
};

const writtenNumbersArray: Array<INumbersProperties> = [
  units,
  uniqueDozen,
  commonDozen,
  hundreds,
];

export { writtenNumbersArray };
