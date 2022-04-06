const isValidUserName = async (req, res, next) => {
  const { username } = req.body;
  const LIMIT = 5;  

  if (!username) return res.status(401).json({ message: 'username id required' });
  if (username.length < LIMIT) return res.status(401).json({ message: 'username min 5 carácter' });
  next();
};

const isValidPassword = async (req, res, next) => {
  const { password } = req.body;
  const LIMIT = 5;  

  if (!password || typeof password !== 'string') {
    return res.status(401).json({ message: 'username id required' });
  }

  if (password.length < LIMIT) return res.status(401).json({ message: 'username min 5 carácter' });
  next();
};

module.exports = {
  isValidUserName,
  isValidPassword,
};