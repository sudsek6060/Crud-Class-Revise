const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is Required"],
        trim: true,
        maxlength: [25, "Maximum length of name is 25"]
    },
    email: {
        type: String,
        require: [true, "Email is requird"],
        unique: true
    }
});

module.exports = mongoose.model("User", userSchema);