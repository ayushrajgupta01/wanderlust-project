const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type: String,
        required: true
    }
});

//passport-local-mongoose automaticaly define and saved the hashed username and password so we dont have to make schema for this
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
