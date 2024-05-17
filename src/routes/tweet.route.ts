import { Router } from "express";
import { getTweetController,createTweetController,updateTweetController,deleteTweetController } from "../controllers/tweet.controller";
const tweetrouter=Router();

//define paths

tweetrouter.get("/:tweetId",getTweetController);
// tweetrouter.get("/",GetallTweetController);//to get all tweets
tweetrouter.post("/",createTweetController);
tweetrouter.delete("/:tweetId",deleteTweetController);
tweetrouter.put("/",updateTweetController);

export default tweetrouter

// routes->controller -> repository -> mongodb-> repository->controller->route->json 