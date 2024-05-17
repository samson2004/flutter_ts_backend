// routes->controller -> repository -> mongodb-> repository->controller->route->json
import { deleteUsersTweetidRepo,  updateUserwithTweetidRepo } from "../repositories/user.repository";
import { Request,Response } from "express";
import { getTweetRepo,createTweetRepo,deleteTweetRepo,updateTweetRepo } from "../repositories/tweet.repository";
import { ItweetInterface } from "../database/interfaces/tweet.interface";
import { IuserInterface } from "../database/interfaces/user.interface";

export const getTweetController = async (req:Request,res:Response)=>{
    const tweetId=req.params.tweetId as string;

    try{
        const tweet=await getTweetRepo(tweetId);
        if(tweet){
            res.status(200).json({"data":tweet});
        }else{
            res.status(500).json({"data":"tweet not found"});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Error":err});
    }
};

export const createTweetController= async (req:Request,res:Response)=>{
    const tweet: ItweetInterface=req.body;

    try{
        const success=await createTweetRepo(tweet);
        if(success){
            const  userUpdateSuccess= await updateUserwithTweetidRepo(tweet.adminid,tweet.tweetid);
            if(userUpdateSuccess){
                res.status(200).json({"data":"tweet created"});
            }
            else{
                res.status(450).json({"data":"user not created"});
            }
            }else{
            res.status(500).json({"data":"tweet not Created"});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Error":err});
    }
};


export const deleteTweetController= async (req:Request,res:Response)=>{
    const tweetid=req.params.tweetId as String;
    const deleteuserstweetid:ItweetInterface=req.body;
    console.log(tweetid,deleteuserstweetid)
    try{
        const userDeleteSuccess=await deleteUsersTweetidRepo(deleteuserstweetid.adminid,tweetid);
        console.log(userDeleteSuccess)
        if(userDeleteSuccess){
            const success=await deleteTweetRepo(tweetid);
            if(success){
                res.status(200).json({"data":"tweet deleted"});
            }
            else{
                res.status(450).json({"data":"  tweet deleted ,and cannot deleted from user"});
            }
        }
        else{
            res.status(500).json({"data":"tweet not deleted"});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Error":err});
    }
};


export const updateTweetController= async (req:Request,res:Response)=>{
    const updatedtweet: ItweetInterface=req.body;

    try{
        const success=await updateTweetRepo(updatedtweet.tweetid,updatedtweet);
        if(success){
            res.status(200).json({"data":"tweet updated"});
        }else{
            res.status(500).json({"data":"tweet not Updated"});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Error":err});
    }
};
