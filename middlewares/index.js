const error = require('./error');
const isValidLogin = require('./isValidLogin');
const { validToken } = require('./auth');
const { validAdmin } = require('./admin');

module.exports = {
  error,
  isValidLogin,
  validToken,
  validAdmin,
};
