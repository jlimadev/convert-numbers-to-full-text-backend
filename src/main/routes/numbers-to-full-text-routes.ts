import { Router } from 'express';
import { adaptRoute } from '../adapters/route-adapter';
import { makeConvertNumberToFullTextController } from '../factories/controllers/convert-number-to-full-text-controller-factory';

const numbersToFullTextRoutes = (router: Router): void => {
  router.get('/full-text/:number', adaptRoute(makeConvertNumberToFullTextController()));
};

export default numbersToFullTextRoutes;
