const profile = (req, res) => {
  const { name } = req.params;
  return res.send(name);
};

module.exports = {
  profile
};
