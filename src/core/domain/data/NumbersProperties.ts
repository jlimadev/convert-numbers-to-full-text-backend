export default interface NumbersProperties {
  properties: {
    digits: number;
    mod: number;
    hasSpecialSpelling: boolean;
  };
  writtenNumbers: {
    [n: number]: string;
  };
}
