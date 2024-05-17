// routes->controller -> repository -> mongodb-> repository->controller->route->json

import { Request,Response } from "express";
import { getUserRepo,createUserRepo,deleteUserRepo,updateUserRepo } from "../repositories/user.repository";
import { IuserInterface } from "../database/interfaces/user.interface";

export const getUserController = async (req:Request,res:Response)=>{
    const userId=req.params.userId as string;

    try{
        const user=await getUserRepo(userId);
        if(user){
            res.status(200).json({"data":user});
        }else{
            res.status(500).json({"data":"user not found"});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Error":err});
    }
};

export const createUserController= async (req:Request,res:Response)=>{
    const user: IuserInterface=req.body;
    try{
        const success=await createUserRepo(user);
        if(success){
            res.status(200).json({"data":"user created"});
        }else{
            res.status(500).json({"data":"user not Created"});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Error":err});
    }
};

export const deleteUserController= async (req:Request,res:Response)=>{
   const userid=req.params.userId as String;

    try{
        const success=await deleteUserRepo(userid);
        if(success){
            res.status(200).json({"data":"user deleted"});
        }else{
            res.status(500).json({"data":"user not deleted"});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Error":err});
    }
};


export const updateUserController= async (req:Request,res:Response)=>{
    const updateduser: IuserInterface=req.body;

    try{
        const success=await updateUserRepo(updateduser.uid,updateduser);
        if(success){
            res.status(200).json({"data":"user updated"});
        }else{
            res.status(500).json({"data":"user not Updated"});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({"Error":err});
    }
};