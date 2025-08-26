const userData = require('../models/users');
const tokenData = require('../models/tokens');

const users = async (req, res) => {
    const username = req.body.username;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }
    const checkToken = await tokenData.findOne({ username: username });
    if (!checkToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const allUsers = await userData.find();
    return res.json(allUsers);
};

module.exports = users ;