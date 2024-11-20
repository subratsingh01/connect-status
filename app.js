const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://subratsingh:u8IEesh8Ay143SCF@cluster0.8fkuo.mongodb.net/Swan");


const model_of_mongoose = mongoose.model("main", {
    heart: Number,
    gift_heart: Number,
    red_heart: Number
})

let heart_c = 0;
let gift_heart_c = 0;
let red_heart_c = 0;

const data1 = new model_of_mongoose({
    heart: heart_c,
    gift_heart: gift_heart_c,
    red_heart: red_heart_c
})

const data = model_of_mongoose({
    heart: 2,
    gift_heart: gift_heart_c+1,
    red_heart: red_heart_c+1
})

// data1.save();
data.updateOne();
data.save();


console.log("done");