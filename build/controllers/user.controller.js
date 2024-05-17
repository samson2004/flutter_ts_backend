"use strict";
// routes->controller -> repository -> mongodb-> repository->controller->route->json
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
exports.updateUserController = exports.deleteUserController = exports.createUserController = exports.getUserController = void 0;
const user_repository_1 = require("../repositories/user.repository");
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const user = yield (0, user_repository_1.getUserRepo)(userId);
        if (user) {
            res.status(200).json({ "data": user });
        }
        else {
            res.status(500).json({ "data": "user not found" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err });
    }
});
exports.getUserController = getUserController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const success = yield (0, user_repository_1.createUserRepo)(user);
        if (success) {
            res.status(200).json({ "data": "user created" });
        }
        else {
            res.status(500).json({ "data": "user not Created" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err });
    }
});
exports.createUserController = createUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userid = req.params.userId;
    try {
        const success = yield (0, user_repository_1.deleteUserRepo)(userid);
        if (success) {
            res.status(200).json({ "data": "user deleted" });
        }
        else {
            res.status(500).json({ "data": "user not deleted" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err });
    }
});
exports.deleteUserController = deleteUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateduser = req.body;
    try {
        const success = yield (0, user_repository_1.updateUserRepo)(updateduser.uid, updateduser);
        if (success) {
            res.status(200).json({ "data": "user updated" });
        }
        else {
            res.status(500).json({ "data": "user not Updated" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err });
    }
});
exports.updateUserController = updateUserController;
