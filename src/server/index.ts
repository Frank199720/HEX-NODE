import express , { Express , Request , Response} from 'express';

// *Swagger

import swaggerUi from 'swagger-ui-express';


// *Security
import cors from 'cors';
import helmet from 'helmet'

//TODO: HTTPS

 import router from '../routes';
import mongoose from 'mongoose';

// *Create Express app

const server: Express = express();


// * Swagger Config and route
server.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined,
    {
        swaggerOptions : {
            url : '/swagger.json',
            explorer : true,
            
        }
    })
)

// *Content Type Config: 
server.use(express.urlencoded({ extended: false , limit : '50mb' }));
server.use(express.json());

// *Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes folder
//From this point onover : 'http://localhost:3000/api/...'
server.use('/api', router);

// *Static server
server.use(express.static('public'));

//TODO: Mongoose Connection

mongoose.connect('mongodb://localhost:27017/codeverification')




// *Security Config

// server.use(helmet());
// server.use(cors());


// *Redirection config
// http://localhost:3000/ -->  
server.get('/', (req: Request, res: Response) => {

    res.redirect('/api');

});

export default server;