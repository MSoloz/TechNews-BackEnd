const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        password:String,
        image : {
            type: String,
            default :'user.jpg'
        },
        followings: [{ type: mongoose.Types.ObjectId, required: true, ref: "user" }],
        followers: [{ type: mongoose.Types.ObjectId, required: true, ref: "user" }],

    }
);

const User = mongoose.model("user", userSchema);

module.exports = { User }


