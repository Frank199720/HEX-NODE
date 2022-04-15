/**
 * ROOT ROUTER 
 * Redirections to Routers
 */

import express, { Request , Response } from 'express';
import helloRouter from './HelloRouter';
import byeRouter from './ByeRouter';
import { LogInfo } from '../utils/logger';


// Server instance

let server = express();

//Router instance

let rootRouter = express.Router();

// Activate for request to htpp://localhost:3000/api

rootRouter.get('/', ( req : Request , res : Response) => {

    //Send Hello World
    LogInfo('GET: htpp://localhost:3000/api')

    res.send(`Hello World from APP Express`);

});

//Redirections to Routers & Controllers 

server.use('/',rootRouter);
server.use('/hello',helloRouter);
server.use('/goodbye',byeRouter);

//Add more routes to the app


export default server;
