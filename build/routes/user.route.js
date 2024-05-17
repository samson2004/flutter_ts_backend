"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userrouter = (0, express_1.Router)();
//define paths
userrouter.get("/:userId", user_controller_1.getUserController);
userrouter.post("/", user_controller_1.createUserController);
userrouter.delete("/:userId", user_controller_1.deleteUserController);
userrouter.put("/", user_controller_1.updateUserController);
exports.default = userrouter;
// routes->controller -> repository -> mongodb-> repository->controller->route->json 
