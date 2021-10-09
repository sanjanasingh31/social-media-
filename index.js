const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");


dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},()=>{
    console.log("Connection made with MongoB")
});
//middleware
app.use(express.json());  //body parser to post request
app.use(helmet());
app.use(morgan("common"));  //iN output it will display date,address,type and duration

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);


/*app.get("/",(req,res)=>{                        //since,we will be creating rest api in users.js
    res.send("Welcome to homepage")

})
app.get("/users",(req,res)=>{
    res.send("Welcome to user page")
    
})  */


app.listen(8800,()=>{
    console.log("Backend server is running")
    console.log("added new text")

})

