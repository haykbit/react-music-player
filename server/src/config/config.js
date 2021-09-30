const dotenv = require('dotenv')

dotenv.config()

const {
  MONGO_DB_URL_TEST,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_PRODUCTION,
  NODE_ENV,
  PORT,
  CLIENT_URL,
  FB_CERT_TYPE,
  FB_CERT_PROJECT_ID,
  FB_CERT_PRIVATE_KEY_ID,
  FB_CERT_PRIVATE_KEY,
  FB_CERT_CLIENT_EMAIL,
  FB_CERT_CLIEND_ID,
  FB_CERT_AUTH_URI,
  FB_CERT_TOKEN_URI,
  FB_CERT_AUTH_PROVIDER_X509_CERT_URL,
  FB_CERT_CLIENT_X509_CERT_URL,
} = process.env

const ENV = NODE_ENV || 'development'

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
      certConfig: {
        type: FB_CERT_TYPE,
        project_id: FB_CERT_PROJECT_ID,
        private_key_id: FB_CERT_PRIVATE_KEY_ID,
        private_key: FB_CERT_PRIVATE_KEY,
        client_email: FB_CERT_CLIENT_EMAIL,
        client_id: FB_CERT_CLIEND_ID,
        aut_uri: FB_CERT_AUTH_URI,
        token_uri: FB_CERT_TOKEN_URI,
        auth_provider_x509_cert_url: FB_CERT_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: FB_CERT_CLIENT_X509_CERT_URL,
      },
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
      certConfig: {
        type: FB_CERT_TYPE,
        project_id: FB_CERT_PROJECT_ID,
        private_key_id: FB_CERT_PRIVATE_KEY_ID,
        private_key: FB_CERT_PRIVATE_KEY,
        client_email: FB_CERT_CLIENT_EMAIL,
        client_id: FB_CERT_CLIEND_ID,
        aut_uri: FB_CERT_AUTH_URI,
        token_uri: FB_CERT_TOKEN_URI,
        auth_provider_x509_cert_url: FB_CERT_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: FB_CERT_CLIENT_X509_CERT_URL,
      },
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
      certConfig: {
        type: FB_CERT_TYPE,
        project_id: FB_CERT_PROJECT_ID,
        private_key_id: FB_CERT_PRIVATE_KEY_ID,
        private_key: FB_CERT_PRIVATE_KEY,
        client_email: FB_CERT_CLIENT_EMAIL,
        client_id: FB_CERT_CLIEND_ID,
        aut_uri: FB_CERT_AUTH_URI,
        token_uri: FB_CERT_TOKEN_URI,
        auth_provider_x509_cert_url: FB_CERT_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: FB_CERT_CLIENT_X509_CERT_URL,
      },
    },
  },
}

module.exports = {
  config: CONFIG[ENV],
}
