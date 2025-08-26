const userData = require('../models/users');
const bcrypt = require('bcrypt');


const register = async(req, res) => {
    const {firstName, lastName, username, age, email, password} = req.body;
    if(!firstName || !lastName || !age || !email || !password || !username) {
        return res.status(400).json({message: 'All fields are required'});
    }

    const checkUser = await userData.findOne({ email : email });
    if (checkUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userData({firstName, lastName, username, age, email, password: hashedPassword});
    await newUser.save();
    return res.status(201).json({message: 'User registered successfully'});
};

module.exports = register;