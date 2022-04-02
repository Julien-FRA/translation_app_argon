import Router, { RouterContext } from 'koa-router';
import { Context, Next } from 'koa';
import config from '../config';
import { logger } from '../utilities';
import 'isomorphic-fetch';

export const router = new Router({
  prefix: '/word'
});

/**
 * @api {GET} http://localhost:8000/api/{word}
 * @apiGroup Index
 * @apiDescription
 * @apiUse CODE_200
 * @apiUse CODE_500
 * @apiSuccessExample {json} Success Data Example
*/

router.get(
  'word',
  '/:word',
  async (ctx: Context & RouterContext, next: Next): Promise<void> => {
    if (ctx.path === '/favicon.ico') return;
    try {
      const response = await fetch(`${config.DICTIONARY_API}/en/${ctx.params.word}`);
      const data = await response.json();
      ctx.body = data;
      await next();
    } catch (error) {
      logger(`Error ${error} has occurred.`)
    }
  }
);
