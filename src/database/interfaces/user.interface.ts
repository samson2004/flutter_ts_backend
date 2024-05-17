import { Document } from "mongodb";

export interface IuserInterface extends Document{
    uid:string,
    tweets:String[],
    firstname:String,
    lastname:String,
    email:String
    createdAt:string

}


    // routes->controller -> repository -> mongodb-> repository->controller->route->json