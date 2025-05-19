const mongoose = require("mongoose");

const listingsSchema = mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String,
        default:"https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    }
})
const Listings = mongoose.model("listing",listingsSchema);
module.exports = Listings;