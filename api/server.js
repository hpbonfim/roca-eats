const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();  

// var helmet = require('helmet');
// app.use(helmet());
// app.disable('x-powered-by');

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// // enabling CORS for all requests
// app.use(cors());

// // adding morgan to log HTTP requests
// app.use(morgan('combined'));

// require('dotenv-safe').config();



var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

// Porta padrão da aplicação
var port = process.env.PORT || 3000

// Configuração do Auth0
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-w6qr30n0.auth0.com/.well-known/jwks.json'
}),
audience: 'https://rocaeats/api',
issuer: 'https://dev-w6qr30n0.auth0.com/',
algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem vindo ao Rota Eats - API." });
});

// Route for Peoples
require('./app/routes/people.routes.js')(app);

// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port 3000.");
});