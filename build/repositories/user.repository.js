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
exports.deleteUsersTweetidRepo = exports.updateUserwithTweetidRepo = exports.updateUserRepo = exports.deleteUserRepo = exports.createUserRepo = exports.getUserRepo = void 0;
const user_model_1 = __importDefault(require("../database/models/user.model"));
// routes->controller -> repository -> mongodb-> repository->controller->route->json
const getUserRepo = (userid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ uid: userid });
        return user;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.getUserRepo = getUserRepo;
const createUserRepo = (userid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.create(userid);
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
});
exports.createUserRepo = createUserRepo;
const deleteUserRepo = (userid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield user_model_1.default.findOneAndDelete({ uid: userid });
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
exports.deleteUserRepo = deleteUserRepo;
const updateUserRepo = (userid, updateduser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.findOneAndUpdate({ uid: userid }, updateduser, { new: true });
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
exports.updateUserRepo = updateUserRepo;
const updateUserwithTweetidRepo = (userid, tweetid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.findOneAndUpdate({ uid: userid }, { $push: { tweets: tweetid } });
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
exports.updateUserwithTweetidRepo = updateUserwithTweetidRepo;
const deleteUsersTweetidRepo = (userid, tweetid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.findOneAndUpdate({ uid: userid }, { $pull: { tweets: tweetid } });
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
exports.deleteUsersTweetidRepo = deleteUsersTweetidRepo;
