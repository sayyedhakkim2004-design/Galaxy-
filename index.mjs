import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.json());
app.use(cors());


const mongoURI = process.env.MONGO_PUBLIC_URL;

if (!mongoURI) {
    console.error("Mongo URI is NOT defined in .env");
    process.exit(1);
}
mongoose.connect(mongoURI)
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
        required:true
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

app.get("/",async(req,res)=>{
    try {
        const datas = await users.find();
        res.json(datas);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }

    
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
        res.status(201).json({message:"deleted successfully"});

    }
    catch(err){
        console.log(err)
        res.status(400).json({message:"delete failed"})

    }
})

app.listen(PORT,()=>{
    console.log(`App is Listening to the Server ${PORT} `)
})

