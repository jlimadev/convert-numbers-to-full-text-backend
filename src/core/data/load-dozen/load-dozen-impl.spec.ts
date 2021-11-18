import { LoadDozenImpl } from './load-dozen-impl';
import { specialDozens } from '../../domain/model/numbers';

describe('load-dozen-impl', () => {
  it('should return all special dozens when input is [10, 11, 12 ... 19]', () => {
    const specialDozensValues = Object.values(specialDozens.data);
    const dozens = Array.from(Array(20).keys()).filter((n) => n >= 10);
    const sut = new LoadDozenImpl();
    dozens.forEach((dozen) => {
      const result = sut.loadDozen(dozen);
      expect(specialDozensValues).toContain(result);
    });
  });
});
