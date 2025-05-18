const express =  require("express");
const app = express();
const mongoose = require("mongoose");


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

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
    
})