import express , { Request , Response } from 'express';
import { ByeController } from '../controllers/ByeController';
import { LogInfo } from '../utils/logger';

// Router from express 

let helloRouter = express.Router();

//GET -> http://localhost:3000/api/hello/

helloRouter.route('/')
    .get( async ( req: Request , res: Response) => {

        //Obtain a Query Param

        let name : any = req?.query?.name;
        LogInfo(`Query Param : ${name}`);
        //Controller Instance to execute 

        const controller : ByeController = new ByeController();

        //Obtain the response from the controller
        const response = await controller.getMessage( new Date(),name);

        return res.json(response);


    });

export default helloRouter;