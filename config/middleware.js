const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');

const setupMiddleware = (app) => {

  app.use(helmet());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


};

module.exports = setupMiddleware;
