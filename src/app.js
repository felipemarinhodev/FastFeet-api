import 'dotenv/config';

import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    console.log('var. env:', process.env.NODE_ENV);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
