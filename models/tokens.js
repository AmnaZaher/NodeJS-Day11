const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '60s'
    }
});

const tokenData = mongoose.model('Token', tokenSchema);
module.exports = tokenData;
