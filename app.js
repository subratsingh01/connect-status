const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://subratsingh:u8IEesh8Ay143SCF@cluster0.8fkuo.mongodb.net/Swan");

const User = mongoose.model("main", {
    heart: Number,

})

const user = new User({
    heart: 0
})

user.save();
console.log("done");