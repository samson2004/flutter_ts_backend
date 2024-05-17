"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTweetController = exports.deleteTweetController = exports.createTweetController = exports.getTweetController = void 0;
// routes->controller -> repository -> mongodb-> repository->controller->route->json
const user_repository_1 = require("../repositories/user.repository");
const tweet_repository_1 = require("../repositories/tweet.repository");
const getTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.tweetId;
    try {
        const tweet = yield (0, tweet_repository_1.getTweetRepo)(tweetId);
        if (tweet) {
            res.status(200).json({ "data": tweet });
        }
        else {
            res.status(500).json({ "data": "tweet not found" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err });
    }
});
exports.getTweetController = getTweetController;
const createTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweet = req.body;
    try {
        const success = yield (0, tweet_repository_1.createTweetRepo)(tweet);
        if (success) {
            const userUpdateSuccess = yield (0, user_repository_1.updateUserwithTweetidRepo)(tweet.adminid, tweet.tweetid);
            if (userUpdateSuccess) {
                res.status(200).json({ "data": "tweet created" });
            }
            else {
                res.status(450).json({ "data": "user not created" });
            }
        }
        else {
            res.status(500).json({ "data": "tweet not Created" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err });
    }
});
exports.createTweetController = createTweetController;
const deleteTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetid = req.params.tweetId;
    const deleteuserstweetid = req.body;
    console.log(tweetid, deleteuserstweetid);
    try {
        const userDeleteSuccess = yield (0, user_repository_1.deleteUsersTweetidRepo)(deleteuserstweetid.adminid, tweetid);
        console.log(userDeleteSuccess);
        if (userDeleteSuccess) {
            const success = yield (0, tweet_repository_1.deleteTweetRepo)(tweetid);
            if (success) {
                res.status(200).json({ "data": "tweet deleted" });
            }
            else {
                res.status(450).json({ "data": "  tweet deleted ,and cannot deleted from user" });
            }
        }
        else {
            res.status(500).json({ "data": "tweet not deleted" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err });
    }
});
exports.deleteTweetController = deleteTweetController;
const updateTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedtweet = req.body;
    try {
        const success = yield (0, tweet_repository_1.updateTweetRepo)(updatedtweet.tweetid, updatedtweet);
        if (success) {
            res.status(200).json({ "data": "tweet updated" });
        }
        else {
            res.status(500).json({ "data": "tweet not Updated" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err });
    }
});
exports.updateTweetController = updateTweetController;
