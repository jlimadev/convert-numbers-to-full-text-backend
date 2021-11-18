import { units } from '../../domain/model/numbers';
import { LoadUnit } from '../../domain/usecases/load-unit';

export class LoadUnitImpl implements LoadUnit {
  private readonly units = units;

  loadUnit(number: number): string {
    return this.units.data[number];
  }
}
