const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const {PORT, NODE_ENV} = process.env;

// responses config
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(cors());
=======
app.use(helmet());
app.use(cors({
  origin: JSON.parse(CORS_ORIGIN_AVAILABLE),
  optionsSuccessStatus: 200
}));
>>>>>>> fe1210cfa9f6ef0e6e5b3068e436cf3e5e084b3c

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
