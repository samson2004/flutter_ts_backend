import express,{ Express } from "express";
import htttp from "http";
import dotenv from "dotenv"
import cors from "cors";
import bodyParser from 'body-parser';
import router from "./routes/route";
import mongoose from "mongoose"

const app:Express=express();
const server =htttp.createServer(app);


//express confif

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("PORT",3000)
app.set("BASE_URL","localhost")

dotenv.config()

//define routes

app.use("/api/v1",router)

//mongo connection

const mongourl=process.env.MONGO_DB_URL
if(!mongourl){
    console.error("Mongodb url not defined");
    process.exit(1);
}
mongoose.connect(mongourl).then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.error(err)
    console.log("Error in connecting to monogodb")
});


//start server

try {
    const port:Number =app.get("PORT");
    const baseurl:String=app.get( "BASE_URL" );
    server.listen(port,():void =>{
        console.log("Server is Listening")
    })
} catch (error) {
    console.log(error)
}

export default server