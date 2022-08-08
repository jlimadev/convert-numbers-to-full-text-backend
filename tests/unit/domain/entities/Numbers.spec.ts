import Numbers from '../../../../src/domain/entities/Numbers';

describe('Numbers', () => {
  describe('getUnit', () => {
    it('should get all units [1, 2, ..., 9]', () => {
      const numbers = new Numbers();
      const result: Array<string> = [];
      const range = Array.from(Array(10).keys());
      const expectedLength = 10;
      const expectedResult = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
      ];
      range.forEach((i) => result.push(numbers.getUnit(i)));
      expect(result.length).toBe(expectedLength);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('getDozen', () => {
    it('should get all special numbers [10, 11, ..., 19]', () => {
      const numbers = new Numbers();
      const expectedLength = 10;
      const range = Array.from(Array(20).keys()).filter((n) => n >= 10);
      const expectedResult = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
      ];
      const result: Array<string> = [];
      range.forEach((i) => result.push(numbers.getDozen(i)));
      expect(result.length).toBe(expectedLength);
      expect(result).toEqual(expectedResult);
    });
    it('should get all round dozens [10, 20, ..., 90]', () => {
      const numbers = new Numbers();
      const hundreds = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      const expectedResult = [
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
      ];
      const result: Array<string> = hundreds.map((number) => numbers.getDozen(number));
      expect(result).toEqual(expectedResult);
    });
    it('should get correctly specified dozens [20, 21, ..., 29]', () => {
      const numbers = new Numbers();
      const range = Array.from(Array(30).keys()).filter((n) => n >= 20);
      const expectedResult = [
        'twenty',
        'twenty-one',
        'twenty-two',
        'twenty-three',
        'twenty-four',
        'twenty-five',
        'twenty-six',
        'twenty-seven',
        'twenty-eight',
        'twenty-nine',
      ];
      const result: Array<string> = [];
      range.forEach((i) => result.push(numbers.getDozen(i)));
      expect(result).toEqual(expectedResult);
    });
    it('It will call the getUnit if the number length is < 2', () => {
      const numbers = new Numbers();
      const number = 1;
      const expectedResult = 'one';
      const result = numbers.getThousand(number);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('getHundred', () => {
    it('should get all round hundreds [100, 200, ..., 900]', () => {
      const numbers = new Numbers();
      const hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];
      const expectedResult = [
        'one-hundred',
        'two-hundred',
        'three-hundred',
        'four-hundred',
        'five-hundred',
        'six-hundred',
        'seven-hundred',
        'eight-hundred',
        'nine-hundred',
      ];
      const result: Array<string> = hundreds.map((number) => numbers.getHundred(number));
      expect(result).toEqual(expectedResult);
    });
    it('should get correctly the specified compound hundreds [101, 222, ..., 912]', () => {
      const numbers = new Numbers();
      const hundreds = [101, 222, 345, 499, 567, 666, 703, 838, 912];
      const expectedResult = [
        'one-hundred-one',
        'two-hundred-twenty-two',
        'three-hundred-forty-five',
        'four-hundred-ninety-nine',
        'five-hundred-sixty-seven',
        'six-hundred-sixty-six',
        'seven-hundred-three',
        'eight-hundred-thirty-eight',
        'nine-hundred-twelve',
      ];
      const result = hundreds.map((number) => numbers.getHundred(number));
      expect(result).toEqual(expectedResult);
    });
    it('It will call the getDozen if the number length is < 3', () => {
      const numbers = new Numbers();
      const number = 30;
      const expectedResult = 'thirty';
      const result = numbers.getThousand(number);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('getThousand', () => {
    it('should get correctly specified rounded thousands [1000, 2000, ..., 9000]', () => {
      const numbers = new Numbers();
      // [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
      const thousands = Array.from(Array(9).keys(), (i) => (i + 1) * 1000);
      const expectedResult = [
        'one-thousand',
        'two-thousand',
        'three-thousand',
        'four-thousand',
        'five-thousand',
        'six-thousand',
        'seven-thousand',
        'eight-thousand',
        'nine-thousand',
      ];
      const result = thousands.map((number) => numbers.getThousand(number));
      expect(result).toEqual(expectedResult);
    });
    it('should get correctly specified thousands [1030, 2131, ..., 9838]', () => {
      const numbers = new Numbers();
      // [1030, 2131, 3232, 4333, 5434, 6535, 7636, 8737, 9838]
      const thousands = Array.from(Array(9).keys(), (i) => (i + 1) * 1000 + (i * 100 + 30 + i));
      const expectedResult = [
        'one-thousand-thirty',
        'two-thousand-one-hundred-thirty-one',
        'three-thousand-two-hundred-thirty-two',
        'four-thousand-three-hundred-thirty-three',
        'five-thousand-four-hundred-thirty-four',
        'six-thousand-five-hundred-thirty-five',
        'seven-thousand-six-hundred-thirty-six',
        'eight-thousand-seven-hundred-thirty-seven',
        'nine-thousand-eight-hundred-thirty-eight',
      ];
      const result = thousands.map((number) => numbers.getThousand(number));
      expect(result).toEqual(expectedResult);
    });
    it('It will call the getHundred if the number length is < 4', () => {
      const numbers = new Numbers();
      const number = 100;
      const expectedResult = 'one-hundred';
      const result = numbers.getThousand(number);
      expect(result).toEqual(expectedResult);
    });
  });
});
