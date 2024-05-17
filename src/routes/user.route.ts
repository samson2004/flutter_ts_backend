import { Router } from "express";
import { getUserController,createUserController,deleteUserController,updateUserController } from "../controllers/user.controller";

const userrouter=Router();

//define paths

userrouter.get("/:userId",getUserController);
userrouter.post("/",createUserController);
userrouter.delete("/:userId",deleteUserController);
userrouter.put("/",updateUserController);

export default userrouter


// routes->controller -> repository -> mongodb-> repository->controller->route->json 