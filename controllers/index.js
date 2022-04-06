const ping = require('./ping');
const { postLogin, loginAccess } = require('./login');
const { admin } = require('./admin');

module.exports = {
  ping,
  postLogin,
  loginAccess,
  admin,
};
