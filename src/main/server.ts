import { ConvertNumberToFullText } from '../application/ConvertNumberToFullText';
import ExpressAdapter from '../infra/adapters/ExpressAdapter';
import { Http } from '../infra/http';
import { ConvertNumberToFullTextController } from '../presentation/controllers/ConvertNumberToFullTextController';
import { Validator } from '../presentation/protocols';
import { NumberInputValidator } from '../presentation/validation/NumberInputValidator';

const http: Http = new ExpressAdapter();
const numberValidator: Validator = new NumberInputValidator();
const convertNumberToFullText = new ConvertNumberToFullText();
new ConvertNumberToFullTextController(http, numberValidator, convertNumberToFullText);

http.listen(3000);
