import Kao from 'koa';
import Logger from 'koa-logger';
import BodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import config from './config';
import { router } from './controllers';
import { logger } from './utilities';

const app = new Kao();
const server = app
  .use(BodyParser())
  .use(cors({
    origin: '*'
  }))
  .use(Logger())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.PORT, async () => {
    logger(`Server listnening on port ${config.PORT}`)
  })
  .on('error', (error) => {
    logger(`Error ${error} has occurred`)
  });

export default server;
