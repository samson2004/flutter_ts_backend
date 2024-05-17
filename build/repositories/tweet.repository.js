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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTweetRepo = exports.createTweetRepo = exports.deleteTweetRepo = exports.getTweetRepo = void 0;
const tweet_model_1 = __importDefault(require("../database/models/tweet.model"));
// routes->controller -> repository -> mongodb-> repository->controller->route->json
const getTweetRepo = (tweetid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tweet = yield tweet_model_1.default.findOne({ tweetid: tweetid });
        return tweet;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.getTweetRepo = getTweetRepo;
const deleteTweetRepo = (tweetid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield tweet_model_1.default.findOneAndDelete({ tweetid: tweetid });
        if (deleted) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.error(err);
        return false;
    }
});
exports.deleteTweetRepo = deleteTweetRepo;
const createTweetRepo = (tweetid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield tweet_model_1.default.create(tweetid);
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
});
exports.createTweetRepo = createTweetRepo;
const updateTweetRepo = (tweetid, updatedtweet) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield tweet_model_1.default.findOneAndUpdate({ tweetid: tweetid }, updatedtweet, { new: true });
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.error(err);
        return false;
    }
});
exports.updateTweetRepo = updateTweetRepo;
