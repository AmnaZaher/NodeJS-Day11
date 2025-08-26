const userData = require('../models/users');
const bcrypt = require('bcrypt');
const tokenData = require('../models/tokens');

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await userData.findOne({ username: username });
    if (!user) {
        return res.status(401).json({ message: 'Invalid username' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const addToken = new tokenData({ username: username });
    await addToken.save();

    return res.status(200).json({ message: 'Login successful' });
};

module.exports = login;