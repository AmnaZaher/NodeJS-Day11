const userData = require('../models/users');

const register = async(req, res) => {
    const {firstName, lastName, age, email, password} = req.body;
    if(!firstName || !lastName || !age || !email || !password) {
        return res.status(400).json({message: 'All fields are required'});
    }
    const newUser = new userData({firstName, lastName, age, email, password});
    await newUser.save();
    return res.status(201).json({message: 'User registered successfully'});
};

module.exports = register;