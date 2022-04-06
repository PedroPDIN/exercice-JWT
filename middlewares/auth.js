const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const validToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(authorization, SECRET);
    req.xablau = decoded;

    return next();
  } catch (e) {
    req.status(500).end();
  }
};

module.exports = {
  validToken,
};
