import { writtenNumbersData } from './core/domain/data/NumbersData';
import { WrittenNumberFactory } from './core/usecases/number-factory/WrittenNumberFactory';
import { SpellOutNumber } from './core/usecases/spell-out-number/SpellOutNumber';

(() => {
  const numbersFactory = new WrittenNumberFactory(writtenNumbersData);
  const writeNumbers = new SpellOutNumber(numbersFactory);

  const numbers = Array.from(Array(10000).keys());
  const writtenNumbers = numbers.map((number) =>
    writeNumbers.invokeWith(number),
  );

  console.log(writtenNumbers.reverse());
})();
