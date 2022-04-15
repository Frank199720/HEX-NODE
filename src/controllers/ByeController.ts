import { LogSuccess } from '../utils/logger';
import { IByeController } from './interfaces/bye.interface';
import { ResponseExercice } from './types/response.type';
export class ByeController implements IByeController {
    async getMessage( date: Date , name?: string,): Promise<ResponseExercice> {
        
        LogSuccess("[/api/goodbye] Get Request");
        
        return {
            message: `Goodbye ${name || "anonimo"}`,
            Date: date
        };
    }

}