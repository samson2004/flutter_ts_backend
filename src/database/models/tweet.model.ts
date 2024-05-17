import mongoose,{Schema} from "mongoose";
import { ItweetInterface } from "../interfaces/tweet.interface";

const tweetschema =new Schema<ItweetInterface>({
    tweetid:{type:String},
    content:{type:String,default:""},
    createdAt:{type:String,required:true},
    adminid:{type:String,required:true}
});

const tweetModel=mongoose.model<ItweetInterface>('TweetModel', tweetschema)
export default tweetModel;