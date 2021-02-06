const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (res, req) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
