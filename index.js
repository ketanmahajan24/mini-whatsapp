const express=require("express");//require express
const app= express();
const mongoose=require("mongoose");
const path=require("path");
const Chat = require("./models/chat.js")
require('dotenv').config()//env variable


dbpath=process.env.mongoDB;

app.set("views",path.join(__dirname,"views"));  
app.set("view engine","ejs");

main()
.then(()=>{
    console.log("connection successfull");
}) 
.catch((err) =>  console.log(err));

async function main(){
    await mongoose.connect(dbpath)
}

// let chat1= new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"send me your exam sheet",
//     created_at: new Date(),
// })

// chat1.save()
//         .then((res)=>{
//             console.log(res);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })









//Index Route


app.get("/chats",async (req,res)=>{
    let chats= await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})

app.get("/",(req,res)=>{
    res.send("root is working");
});





//server
app.listen(8080,()=>{
    console.log("server is listening on 8080");

})
