const mongoose=require('mongoose')
let cakeSchema=new mongoose.Schema({   
    _id: Number,
    name: String,
    price: Number,
    image: String,
    cakeid: Number,
},
{collection:'cake'});

module.exports=new mongoose.model("cake",cakeSchema)