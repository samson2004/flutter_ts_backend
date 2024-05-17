import { Express, Router } from "express";
import userrouter   from "./user.route";
import tweetrouter from "./tweet.route";
import hellorouter from "./hello.route";


const router=Router();

router.use('/hello',hellorouter)
router.use('/user',userrouter)
router.use('/tweet',tweetrouter)

export default router

// routes->controller -> repository -> mongodb-> repository->controller->route->json 