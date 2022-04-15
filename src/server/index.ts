import express , { Express , Request , Response} from 'express';

// *Enviroment variables


// *Security
import cors from 'cors';
import helmet from 'helmet'

//TODO: HTTPS

 import router from '../routes';

// *Create Express app

const server: Express = express();

// *Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes folder
//From this point onover : 'http://localhost:3000/api/...'
server.use('/api', router);

// *Static server
server.use(express.static('public'));

//TODO: Mongoose Connection

// *Security Config

server.use(helmet());
server.use(cors());

// *Content Type Config: 
server.use(express.urlencoded({ extended: true , limit : '50mb' }));
server.use(express.json({ limit : '50mb' }));

// *Redirection config
// http://localhost:3000/ -->  
server.get('/', (req: Request, res: Response) => {

    res.redirect('/api');

});

export default server;