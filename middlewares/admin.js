const validAdmin = async (req, res, next) => {
  const { admin } = req.xablau;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }
  if (!admin) {
    return res.status(403).json({ error: { message: 'Restricted access' } });
  }
  next();
};

module.exports = {
  validAdmin,
};
