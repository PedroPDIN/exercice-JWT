const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const admin = username === 'admin' && password === 's3nh4S3gur4???';
  if (!admin) return res.status(403).json({ message: 'Invalid username or password' });

    const payload = {
        username,
        admin,
    };

    // console.log(admin);
    const token = jwt.sign(payload, SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
};

const loginAccess = async (req, res) => {
  const { username, admin } = req.xablau;
  return res.status(200).json({ username, admin });
};

module.exports = {
  postLogin,
  loginAccess,
};
