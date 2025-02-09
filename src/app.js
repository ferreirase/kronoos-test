import 'dotenv/config.js';
import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json());

app.use(routes);

app.listen(process.env.APP_PORT || 3000, () =>
  console.log('SERVER IS RUNNING'),
);
