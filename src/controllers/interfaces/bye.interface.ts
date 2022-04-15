import { ResponseExercice } from "../types/response.type";

export interface IByeController {
    getMessage(date : Date , name?: string ,  ): Promise<ResponseExercice>;
}