const HOST = process.env.MYSQL_HOST;
const USER = process.env.MYSQL_USER;
const PASSWORD = process.env.MYSQL_PASSWORD;
const PORT = process.env.MYSQL_PORT;
const DATABASE = process.env.MYSQL_DATABASE;
const PRODUCTION_HOST = process.env.PRODUCTION_MYSQL_HOST;
const PRODUCTION_USER = process.env.PRODUCTION_MYSQL_USER;
const PRODUCTION_PASSWORD = process.env.PRODUCTION_MYSQL_PASSWORD;
const PRODUCTION_PORT = process.env.PRODUCTION_MYSQL_PORT;
const PRODUCTION_DATABASE = process.env.PRODUCTION_MYSQL_DATABASE;
const BSM_AUTH_CLIENT_ID = process.env.BSM_AUTH_CLIENT_ID;
const BSM_AUTH_CLIENT_SECRET = process.env.BSM_AUTH_CLIENT_SECRET;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
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
