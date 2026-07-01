const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    }
});
mondule.exports = mongoose.model ("User", userSchema);