const ENV = process.env.ENV;
const HOST = process.env.DEVELOPMENT_HOST;
const USER = process.env.DEVELOPMENT_USER;
const PASSWORD = process.env.DEVELOPMENT_PASSWORD;
const PORT = process.env.DEVELOPMENT_PORT;
const DATABASE = process.env.DEVELOPMENT_DATABASE;
const PRODUCTION_HOST = process.env.PRODUCTION_HOST;
const PRODUCTION_USER = process.env.PRODUCTION_USER;
const PRODUCTION_PASSWORD = process.env.PRODUCTION_PASSWORD;
const PRODUCTION_PORT = process.env.PRODUCTION_PORT;
const PRODUCTION_DATABASE = process.env.PRODUCTION_DATABASE;
const BSM_AUTH_CLIENT_ID = process.env.BSM_AUTH_CLIENT_ID;
const BSM_AUTH_CLIENT_SECRET = process.env.BSM_AUTH_CLIENT_SECRET;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
  ENV,
  HOST,
  USER,
  PASSWORD,
  PORT,
  DATABASE,
  PRODUCTION_HOST,
  PRODUCTION_USER,
  PRODUCTION_PASSWORD,
  PRODUCTION_PORT,
  PRODUCTION_DATABASE,
  BSM_AUTH_CLIENT_ID,
  BSM_AUTH_CLIENT_SECRET,
  JWT_SECRET_KEY,
};
