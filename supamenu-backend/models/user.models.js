import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    names: String,
    email: String,
    phonenumber: Number,
    password: String
})

const User = mongoose.model('Users', userSchema)

module.exports = User;
