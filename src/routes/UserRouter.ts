import express , { Request , Response } from 'express';

import { LogInfo } from '../utils/logger';
import { UsersController } from '../controllers/UserController';

// Router from express 

let userRouter = express.Router();

//GET -> http://localhost:3000/api/users/

userRouter.route('/')
    .get( async ( req: Request , res: Response) => {

        //Obtain a Query Param (ID)

        let id : any = req?.query?.id;
        
        LogInfo(`Query Param : ${id}`)

        //Controller Instance to execute 

        const controller : UsersController = new UsersController();

        //Obtain the response from the controller
        const response = await controller.getUsers(id);

        return res.json(response);


    })
    .delete( async ( req: Request , res: Response) => {
            
            //Obtain a Query Param (ID)
    
            let id : any = req?.query?.id;
            
            LogInfo(`Query Param : ${id}`)
    
            //Controller Instance to execute 
    
            const controller : UsersController = new UsersController();
    
            //Obtain the response from the controller
            const response = await controller.deleteUser(id);
    
            return res.json(response);
    })
    .post( async ( req: Request , res: Response) => {

        //Obtain a data from the body

        let data : any = req.body;

        LogInfo(`Body : ${data}`)

        //Controller Instance to execute

        const controller : UsersController = new UsersController();

        //Obtain the response from the controller

        const response = await controller.createUser(data);

        return res.json(response);

    })
    .put( async ( req: Request , res: Response) => {

        let id : any = req?.query?.id;
            
        LogInfo(`Query Param : ${id}`)

        //Obtain a data from the body

        let data : any = req?.body;

        LogInfo(`Body : ${data}`)

        //Controller Instance to execute

        const controller : UsersController = new UsersController();

        //Obtain the response from the controller

        const response = await controller.updateUser(data , id);

        return res.json(response);


    });

export default userRouter;