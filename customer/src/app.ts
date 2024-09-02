/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const routes = require('./routes.ts');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту`);
});
