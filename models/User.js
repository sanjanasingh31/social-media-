const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:5,
        max:30,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        unique:true,
        
    },
    profilePicture:{
        type:String,
        default:"",
    },
    coverPicture:{
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[],
    },
    followings:{
        type:Array,
        default:[],

    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
    {timestamp:true}





);
module.exports=mongoose.model("User",UserSchema);



