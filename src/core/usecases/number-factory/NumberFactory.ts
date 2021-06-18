export interface NumberFactory {
  getUnitOf: (n: number) => string;
  getDozenOf: (n: number) => string;
  getHundredOf: (n: number) => string;
}
