const { get } = require('config');
const express = require('express');
const cors = require('cors');
const Generate = express.Router();
const controllers = require('../controllers/generate');

Generate.route('/generate')
    .post(controllers.generate);

module.exports = Generate;