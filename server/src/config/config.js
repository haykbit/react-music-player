const dotenv = require("dotenv");

dotenv.config();

const {
  MONGO_DB_URL_TEST,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_PRODUCTION,
  NODE_ENV,
  PORT,
  CLIENT_URL,
  ENCRYPTION_SALT_TEST,
  ENCRYPTION_SALT_DEVELOPMENT,
  ENCRYPTION_SALT_PRODUCTION,
  ACCESS_TOKEN_SECRET,
} = process.env;

const ENV = NODE_ENV || "development";

const CONFIG = {
  production: {
    app: {
      PORT: PORT || 4000,
    },
    client: {
      URL: CLIENT_URL,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
    firebase: {
      certConfig: {},
    },
  },

  development: {
    app: {
      PORT: PORT || 4000,
    },
    client: {
      URL: CLIENT_URL,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    firebase: {
      certConfig: {},
    },
  },

  test: {
    app: {
      PORT: PORT || 4000,
    },
    client: {
      URL: CLIENT_URL,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
    firebase: {
      certConfig: {},
    },
  },
};

module.exports = {
  config: CONFIG[ENV],
};
