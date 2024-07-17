var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://smartsaurabh2002:<password>@cluster0.jyohy4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};