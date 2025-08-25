const profile = (req, res) => {
  res.render('profile', { title: 'Profile', name: req.params.name, age: req.params.age });
};

module.exports = {
  profile
};
