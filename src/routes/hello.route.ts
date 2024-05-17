// routes->controller -> repository -> mongodb-> repository->controller->route->json
import { Router,Request,Response} from "express";

const hellorouter=Router();

//define paths
hellorouter.get( "/", (req:Request,res:Response) =>{
    res.json( {"data":"server is live"} );
});

export default hellorouter