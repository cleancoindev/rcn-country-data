const dotenv = require('dotenv-safe');
const result = dotenv.config();

if (result.error) {
  throw result.error;
}
