const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

module.exports = () => {
    const app = express();
    app.use(cors());

    app.set('port', 3001 || config.get('server.port'));
    app.use(bodyParser.json());

    return app;
}