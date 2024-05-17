import { Document } from "mongodb";

export interface ItweetInterface extends Document {
    tweetid:String,
    content:String,
    createdAt:string,
    adminid:String
}

// routes->controller -> repository -> mongodb-> repository->controller->route->json