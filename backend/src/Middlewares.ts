import bodyParser from 'body-parser';
import {
  RequestHandler,
} from 'express-serve-static-core';
import cookieParser from 'cookie-parser';
import cors from 'cors';



export const defaultMiddlewares = [
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json({ limit: '100mb' }),
  cookieParser(),
  bodyParser.json({ type: 'application/vnd.api+json' }),
  cors(),
] as RequestHandler[];