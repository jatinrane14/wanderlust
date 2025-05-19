const express =  require("express");
const app = express();
const mongoose = require("mongoose");
const Listings = require("./Models/listing");


main().then(()=>{
    console.log("Connection Established");    
}).catch((err)=>{
    console.log(err);
    
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}


app.get("/",(req,res)=>{
    res.send("Root")
})
app.get("/testing",async(req,res)=>{
    const lst1 = await Listings({
        title:"hula ke bala Restro",
        description:"nice restro",
        price:6000,
        location:"vijay nagar Indore",
        country:"India"
    })
    await lst1.save()
    res.send("done")
})
app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
    
})