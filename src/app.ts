import { writtenNumbersData } from './core/domain/model/numbers';
import { WrittenNumberFactory } from './core/data/number-factory/WrittenNumberFactory';
import { SpellOutNumber } from './core/data/spell-out-number/SpellOutNumber';

(() => {
  const numbersFactory = new WrittenNumberFactory(writtenNumbersData);
  const writeNumbers = new SpellOutNumber(numbersFactory);

  const numbers = Array.from(Array(10000).keys());
  const writtenNumbers = numbers.map((number) =>
    writeNumbers.invokeWith(number),
  );

  console.log(writtenNumbers.reverse());
})();
