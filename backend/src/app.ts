import express from 'express';

import { defaultMiddlewares } from './Middlewares';

export default () => initApp();

export function initApp({ port = 3333 } = {}) {
  return new Promise(async (resolve) => {
    const app  = express();

    app.disable('etag');

    app.get('/', (req, res) => res.status(200).send('ok'));
    app.get('/ping', (req, res) => res.status(200).send('pong'));

    app.use(defaultMiddlewares);

    app.listen(port, '0.0.0.0', () => {
    console.log(`App listening on port %s`, port);
    resolve(app);
  })
});
}