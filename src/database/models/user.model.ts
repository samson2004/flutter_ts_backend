import mongoose,{Document,Schema} from "mongoose";
import { IuserInterface } from "../interfaces/user.interface";

const userschema =new Schema<IuserInterface>({
    uid:{type:String,required:true},
    tweets:{type:[String],default:[]},
    firstname:{type:String,default:"User"},
    lastname:{type:String,default:"Name"},
    email:{type:String,required:true},
    createdAt:{type:String,required:true}
});

const userModel=mongoose.model<IuserInterface>('UserModel', userschema)


export default userModel;