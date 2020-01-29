const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {PORT, NODE_ENV} = process.env;

// responses config
app.use(bodyParser.json());

// app routes
app.get('/', (req, res) => {
  const {headers} = req;
  const ip = headers['x-forwarded-for'];
  const country = headers['cf-ipcountry'];

  if (!ip) {
    return res.status(400).send();
  }

  res.send({
    ip,
    country
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} - Environment: ${NODE_ENV}`);
});
