const express = require('express');
const app = express();
const {PORT, NODE_ENV} = process.env;

app.get('/', (req, res) => {
  res.send('API Country Data');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} - Environment: ${NODE_ENV}`);
});
