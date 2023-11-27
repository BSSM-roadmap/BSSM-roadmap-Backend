const {
  USER,
  PASSWORD,
  DATABASE,
  HOST,
  PRODUCTION_USER,
  PRODUCTION_PASSWORD,
  PRODUCTION_DATABASE,
  PRODUCTION_HOST,
} = require("../constants");

const development = {
  "username": USER,
  "password": PASSWORD,
  "database": DATABASE,
  "host": HOST,
  "dialect": "mysql",
};

const test = {
  "username": USER,
  "password": PASSWORD,
  "database": DATABASE,
  "host": HOST,
  "dialect": "mysql",
};

const production = {
  "username": PRODUCTION_USER,
  "password": PRODUCTION_PASSWORD,
  "database": PRODUCTION_DATABASE,
  "host": PRODUCTION_HOST,
  "dialect": "mysql",
};

module.exports = { development, test, production };
