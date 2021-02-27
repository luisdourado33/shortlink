const bodyParser = require('body-parser');
const cors = require('cors');

/**
 * API
 */
const app = require('./config/express')();
const port = app.get('port');

/**
 * Routes
 */

const GenerateRoute = require('./routes/generate');

app.use('/', GenerateRoute);

app.listen(port, () => {
    console.log('ShortLink - API - Default endpoint => http://localhost:' + port);
});