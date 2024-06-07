"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweet_controller_1 = require("../controllers/tweet.controller");
const tweetrouter = (0, express_1.Router)();
//define paths
tweetrouter.get("/:tweetId", tweet_controller_1.getTweetController);
tweetrouter.get("/", tweet_controller_1.getallTweetController); //to get all tweets
tweetrouter.post("/", tweet_controller_1.createTweetController);
tweetrouter.delete("/:tweetId", tweet_controller_1.deleteTweetController);
tweetrouter.put("/", tweet_controller_1.updateTweetController);
exports.default = tweetrouter;
// routes->controller -> repository -> mongodb-> repository->controller->route->json 
