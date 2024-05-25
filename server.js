// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3001;

// Middleware to parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes defined in routes.js
app.use(routes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
