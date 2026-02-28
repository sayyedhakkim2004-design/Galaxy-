import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app=express();
const PORT=process.env.PORT || 3000;
dotenv.config()

app.use(express.json());
app.use(cors());
console.log("mongodb:",process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDb Connected Successfully")
})
.catch((err)=>{
    console.log(err);
    console.log("Error Occured",err.message)
})

const user=new mongoose.Schema({
    userName:{
        type:mongoose.Schema.Types.String,
        Required:true
    },
    phoneNumber:{
        type:mongoose.Schema.Types.String,
        required:true,
        unique:true
    },
    address:{
        type:mongoose.Schema.Types.String,
        
    },
    product:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    amount:{
        type:mongoose.Schema.Types.Number,
        required:true
    }

})

const users=mongoose.model("users",user);

app.get("/users",async(req,res)=>{
    const datas=await users.find();
    res.json(datas)
    
})
app.post("/users",async(req,res)=>{
    const {body}=req;
    const datas=new users(body);
    try{
        await datas.save();
        return res.status(200).send(datas);
}
    catch(err){
        console.log(err);
        return res.status(400).send({msg:"bad data entry please check it"})
    }
})

app.delete("/users/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        console.log(id)
        await users.findByIdAndDelete(id);

    }
    catch(err){
        console.log(err)
    }
})

app.listen(PORT,()=>{
    console.log(`App is Listening to the Server ${PORT} `)
})

