const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
    {
        text: String,
        image: String,

           likes:{
    
            type:[{type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"}],
            required:false
    
           }, 
           creator :{  type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"}
    
    
    }
);

const News = mongoose.model("news", newsSchema);

module.exports = { News }