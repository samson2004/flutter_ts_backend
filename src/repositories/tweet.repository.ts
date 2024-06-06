import mongoose from "mongoose";
import tweetModel from "../database/models/tweet.model";
import { ItweetInterface } from "../database/interfaces/tweet.interface";
import exp from "constants";
import userModel from "../database/models/user.model";



// routes->controller -> repository -> mongodb-> repository->controller->route->json
 

export const getTweetRepo=async(tweetid:String):Promise<ItweetInterface | null>=>{
    try{
        const tweet=await tweetModel.findOne({tweetid:tweetid});
        return tweet;
    }
    catch(err){
        console.error(err);
        return null;
    }
};


export const deleteTweetRepo=async(tweetid:String):Promise<boolean>=>{
    try{
        const deleted=await tweetModel.findOneAndDelete({tweetid:tweetid});
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

export const createTweetRepo=async(tweetid:ItweetInterface):Promise<boolean>=>{
    try{
        await tweetModel.create(tweetid);
        return true;
    }
    catch(err){
        console.error(err);
        return false;
    }
}

export const updateTweetRepo=async(tweetid:String,updatedtweet:ItweetInterface):Promise<boolean>=>{
    try{
        const result=await tweetModel.findOneAndUpdate({tweetid:tweetid},updatedtweet,{new:true})
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
}

export const getallTweetRepo=async():Promise<any[] | null>=>{
    try {
        const allTweets=await tweetModel.find();
        if(!allTweets || allTweets.length==0){
            return null;
        }
        const   TweetwithUserInfo=await Promise.all(
            allTweets.map(async(tweet)=>{
                const admin=await userModel.findOne({uid:tweet.adminid});
                if(!admin){
                    return {tweet,admin:null}
                }
                return {tweet,admin}
            }));
        return TweetwithUserInfo;
    } catch (err) {
        console.error(err);
        return null;
    }
}