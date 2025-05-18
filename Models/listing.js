const mongoose = require("mongoose");

const listingsSchema = mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
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