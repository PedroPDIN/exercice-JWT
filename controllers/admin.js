const admin = async (req, res) => {
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha' });
};

module.exports = {
  admin,
};
