import { units } from '../../domain/model/numbers';
import { LoadUnit } from '../../domain/usecases/load-unit';

export class LoadUnitImpl implements LoadUnit {
  private readonly units = units;

  constructor(private readonly unit: number) {}

  loadUnit(): string {
    return this.units.data[this.unit];
  }
}
