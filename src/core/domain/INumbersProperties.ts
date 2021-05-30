export default interface INumbersProperties {
  properties: {
    digits: number;
    mod: number;
    isSpecial: boolean;
  };
  writtenNumbers: {
    [n: number]: string;
  };
}
