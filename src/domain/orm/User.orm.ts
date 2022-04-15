import { userEntity } from "../entities/User.entity";

import { LogError , LogSuccess } from "@/utils/logger";

// TODO: CRUD

/**
 * Method to obtain all users from Collection "Users" in Mongo Server
 */

export const GetAllUsers = async (): Promise<any[] | undefined> => {

    try{

        let userModel = userEntity();

        return await userModel.find({isDelete : false});

    }catch(error){

        LogError(`[ORM ERROR]: Getting all users: ${error}`);

    }

}

//TODO: 
// - Get User By Id 
// - Get User By Email
// - Delete User By Id
// - Create a new user
// - Update a User By Id