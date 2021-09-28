const dotenv = require("dotenv");


 dotenv.config();
// require('dotenv').config({
//   path: '../server.env'
// })

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
      url: "mongodb://localhost/apollofy",
    },
    firebase: {
      certConfig: {
        type: "service_account",
        project_id: "spotify-auth-f0e80",
        private_key_id: "1e88f01f1bcfa9442a9a7e82880b258c544bfa4e",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDC1LxfyOr6WLrt\nzsqsQIEbJzNVPGW0nvFnwWPfM+mWRNDdX1eBkK0/ExiNkWxU3NxwYDclFwZYnhGt\nzK8hOYuDYPA92Lyq9V3S8sz08jfinv2+WOe3Z+RZUUARRl2XUrn9it8ZZKioaRLv\nm5jsMdvvKxtKGwskipKuWQWnDnPwsWllery01l698ypmQYUlaJNHOu097shnIgrk\nWwSHsU4/6ZMj8EfnFdo8itR6pAxcRFdDu75tJyXml6PyW+GnW84oNlW2bU12vkAF\nWLKNWO+cmOuRuofy0m4jwjvG9CixNpQFNdyu2yw6ogmLDg3XxuD5c2/njNmHTx+7\naEKstbq5AgMBAAECggEACB1HGTArhTCz3Fqr+z+WgPSBgU/KJpsmD72wtKebV2xX\nTJj/coB9jq5za9X+LoyiS7XeJhfO5lry/ouTUa1tX5PmfZTsyqv8c+Az5BHAfRpF\nFCvsvqk/i+7D3dRR6o8B+wrRHuQf2B/EL6GJ3XB4Kf5gHRaCQMvarxM7FomWD5Sp\nSkeoiWl+EHWdkXT9AfSy4VRAkK810t9/P2/+aUyB0LGRNU/x7ihWp8yAiiz3pVcX\nTIug05yZCVHPWBkEdX6LgIahVWBOBRZmA5/OFAwFNjSTuPq7JZ4GAOQGPw16gfwo\nLEnxXuLM7xsGphaIlRirw/z1qVtcdDMWbD9V6kfsQQKBgQD430EEhuqz3FlI1XYP\nALnKwqfIP/vul6woSdp3XAr/jmvnOBcjemlHOZeh/3weBiGP2FrmcJBjGnl0Avnc\nlCyT9y68AH/3VVyQtdszloKMJfEeblbJBqDwhoAOXLQRpzajr7RR8PpTq5FqBezQ\nKilkyDOTVQ6ZVYK03Nl5DkqLiQKBgQDIaT/JPhi8YKt202FjY/jAiwisYkc216MU\npYv2DBjQet6E3nf/+jma7IT2TE6i2n+SOkk4eWI5fxVzDPCTTnWd+j5vFRxtxo21\nr6RaWmLon81e+fxUlDPG91dccYt91h5P3UGb693EiyEnOTyQk5COF2Og5F6pR9XU\n9h8pghv5sQKBgQDWih7SeDv7sQiG8P1FEasYT5Wz2vSjSbzvPjtGieIxS+VY/dF0\nlCINdGhzDntApqhoCGrUHFVcGYZ5q9cZf+Kt63guOYAXB080sJC2eBkyF8M0KIpH\n4Z77ufbKasAQN8WyddVMjiA94LkKXPE4wh/M8YkEiV58cGqs33XaFafNgQKBgQC9\nNOicpPyTdKzMvVoXjL2/gkPJA+v58fGsP3L484jF4wqL5MDkMagLBLuvEHG5PJHu\nSwrvv2GlqL5mZVQHrq5KXIRvOT4iwa7uVgnTp7vzpVMuFNNOQrDzanbW9vfb8Lej\nbN9RRoiT00qUjmwIjtiN3bUYpCJerUxLB6Z5+LVSsQKBgGf9gKvX+g1EprsRLivp\n/uSWeWzTMEpi4WDDysqcrIMx5vT+XWMiUZEz2+ANBK2jJVHBbX8uLVA7Ermd+Sf8\neOpOwCp65fbmot9REjeC3uyF02K7O0+TsYvpbMebyQq52H6IXdf4XvzSmi9I4cdf\nvmBonQp6RlUyM0BBQZ3qXYZk\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-6nyvm@spotify-auth-f0e80.iam.gserviceaccount.com",
        client_id: "110076373121050650589",
        aut_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "FB_CERT_AUTH_PROVIDER_X509_CERT_URL",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6nyvm%40spotify-auth-f0e80.iam.gserviceaccount.com",

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
};

module.exports = {
  config: CONFIG[ENV],
};