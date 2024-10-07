const mongoose=require("mongoose");
const Chat = require("./models/chat.js");



main()
.then(()=>{
    console.log("connection successfull");
}) 
.catch((err) =>  console.log(err));

async function main(){
    await mongoose.connect("mongodb+srv://ketan24:eFHU4GMHgOBy0Ilc@cluster0.h0ip0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}


let allchats=[
    {
        from:"Ketan",
        to:"adam",
        msg:"send me engg notes",
        created_at: new Date(),
    },
    {
        from:"krushna",
        to:"smith",
        msg:"send me your exam DSA sheet",
        created_at: new Date(),
    },
    {
        from:"amit",
        to:"priya",
        msg:"khana khaya kya",
        created_at: new Date(),
    },
    {
        from:"prathm",
        to:"vaibhav",
        msg:"send me today notes",
        created_at: new Date(),
    },
]

Chat.insertMany(allchats);