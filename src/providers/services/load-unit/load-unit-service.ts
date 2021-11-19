import { units } from '../../../core/domain/model/numbers';
import { LoadUnit } from '../../../core/usecases/protocols';

export class LoadUnitService implements LoadUnit {
  private readonly units = units;

  invoke(number: number): string {
    return this.units.data[number];
  }
}
