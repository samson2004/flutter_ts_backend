import mongoose from "mongoose";
import userModel from "../database/models/user.model";
import { IuserInterface } from "../database/interfaces/user.interface";



// routes->controller -> repository -> mongodb-> repository->controller->route->json


export const getUserRepo=async(userid:String):Promise<IuserInterface | null>=>{
    try{
        const user=await userModel.findOne({uid:userid});
        return user;
    }
    catch(err){
        console.error(err);
        return null;
    }
};




export const createUserRepo=async(userid:IuserInterface):Promise<boolean>=>{//
    try{
        await userModel.create(userid);
        return true;
    }
    catch(err){
        console.error(err);
        return false;
    }
}

export const deleteUserRepo=async(userid:String):Promise<boolean>=>{
    try{
        const deleted=await userModel.findOneAndDelete({uid:userid});
        if(deleted){
            return true;
        }
        else{
            return false;
        }
    }
    catch(err){
        console.error(err);
        return false;
    }
};

export const updateUserRepo=async(userid:String,updateduser:IuserInterface):Promise<boolean>=>{
    try{
        const result=await userModel.findOneAndUpdate({uid:userid},updateduser,{new:true})
        if(result){
            return true;
        }
        else{
            return false;
        }
    }
    catch(err){
        console.error(err);
        return false;
    }

};

export const updateUserwithTweetidRepo=async(userid:String,tweetid:String):Promise<boolean>=>{
    try{
        const result=await userModel.findOneAndUpdate({uid : userid},{$push:{tweets:tweetid}});
        if(result){
            return true;    
        }
        else{
            return false;
        }
        
    }
    catch(err){
        console.error(err);
        return false;
    }
};


export const deleteUsersTweetidRepo=async(userid:String,tweetid:String):Promise<boolean>=>{
    try{
        const result=await userModel.findOneAndUpdate({uid : userid},{$pull:{tweets:tweetid}});
        if(result){
            return true;    
        }
        else{
            return false;
        }
        
    }
    catch(err){
        console.error(err);
        return false;
    }
};