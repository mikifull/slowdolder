/* eslint-disable global-require,import/no-unresolved */
const path = require('path');

let local;
try {
  local = require('./local');
} catch (err) {
  local = {};
}

const ENV = process.env.NODE_ENV || 'development';
const baseDir = path.join(__dirname, '..');

const CLIENT_API_URL = {
  development: 'http://localhost:3000',
  // old development: 'https://api.ossystem.ua',
  // development: 'https://api.dev.ossystem.ua',
  // production: 'http://api.dev.ossystem.com.ua',
  production: 'https://api.ossystem.ua/',
};

const CLIENT_URL = {
  development: 'http://front:8080',
  production: 'http://dev.ossystem.com.ua/',
};

const common = {
  baseDir,
  port: 3000,
  env: ENV,
  salt: 'ossystem',
  youtubeAPIKey: 'AIzaSyDikG7IkUj-vKlM4PhOpbFvDq6rUBWM7Vo',
  uploadBaseURL: 'uploads',
  uploadDir: path.join(baseDir, 'uploads'),
  events: {
    upload: 'events',
    maxSize: {
      thumbnail: 10194304,
      gallery: 50971520,
    },
  },
  employee: {
    upload: 'employee_foto',
    maxSize: {
      foto: 500000000,
    },
  },
  vacancies: {
    maxSize: {
      resume: 10485760,
    },
  },
};

const environments = {
  development: {
    fbPixelId: null,
    clientApiUrl: CLIENT_API_URL.development,
    clientUrl: CLIENT_URL.development,
    db: 'mongodb://mongodb:27017/landing-development',
    email: {
      sender: 'a.sashko@ossystem.ua',
      recievers: [
        'a.sashko@ossystem.ua',
      ],
      transport: {
        host: 'mail.ossystem.ua',
        auth: {
          user: 'a.sashko@ossystem.ua',
          pass: 'xx40ZaYOQiS2DUn5',
        },
        port: 465,
        secure: true,
        tls: {
          rejectUnauthorized: false,
        },
      },
    },
  },

  production: {
    fbPixelId: 361721147983263,
    gtmId: '',
    sentryUrl: 'http://90e4dd90aeb641ea9a5bc997471c405d@sentry.ossystem.ua/4',
    releaseVersion: '1.0.0',
    clientApiUrl: CLIENT_API_URL.production,
    clientUrl: CLIENT_URL.production,
    db: 'mongodb://localhost:27017/landing-production',
    uploadDir: '/var/www/uploads',
    errorsFilePath: path.join(baseDir, 'errors.log'),
    email: {
      sender: 'noreply@ossystem.com.ua',
      recievers: [
        'kaa.ossystem@gmail.com',
        // 'gdd.ossystem@gmail.com',
        'taras.myza@gmail.com',
        'gds.ossystem@gmail.com',
      ],
      transport: {
        service: 'gmail',
        auth: {
          user: 'some.example.mailer@gmail.com',
          pass: 'Cnhf,bxjdj.',
        },
      },
    },
  },

  test: {
    db: 'mongodb://localhost:27017/landing-test',
    email: {
      sender: 'noreply@ossystem.com.ua',
      recievers: [
        'alekseybilous@gmail.com',
      ],
      transport: {
        jsonTransport: true,
      },
    },
  },
};
module.exports = Object.assign(common, environments[ENV], local);