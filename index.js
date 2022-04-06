require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { postLogin, loginAccess, admin } = require('./controllers');
const { isValidLogin, validToken, validAdmin } = require('./middlewares');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.get('/users/me', validToken, loginAccess);
app.get('/top-secret', validToken, validAdmin, admin);

app.post('/login', 
isValidLogin.isValidUserName, 
isValidLogin.isValidPassword,
postLogin);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
