import dotenv from 'dotenv';
import server from './src/server';
import { LogSuccess, LogError } from './src/utils/logger';

// * Configuration the .env file
dotenv.config();

const port : string | number = process.env.PORT || 3000

// *Execute server

server.listen(port, () => {
        LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

// * CONTROL SERVER ERROR

server.on('error', (error)=>{

    LogError(`[SERVER ERROR]: ${error}`);

})

