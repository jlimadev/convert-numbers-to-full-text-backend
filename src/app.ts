import { ConvertNumberToFullTextUsecase } from './core/usecases/convert-number-to-full-text';

(() => {
  const convertNumberToFullText = new ConvertNumberToFullTextUsecase();
  const numbers = Array.from(Array(10000).keys());
  const writtenNumbers = numbers.map((number) => convertNumberToFullText.invoke(number));
  console.log(writtenNumbers.reverse());
})();
