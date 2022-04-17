import { userEntity } from "../entities/User.entity";

import { LogError } from "../../utils/logger";

// TODO: CRUD

/**
 * Method to obtain all users from Collection "Users" in Mongo Server
 */

export const getAllUsers = async (): Promise<any[] | undefined> => {

    try{

        let userModel = userEntity();

        return await userModel.find({});

    }catch(error){

        LogError(`[ORM ERROR]: Getting all users: ${error}`);

    }

}

//TODO: 
// - Get User By Id 
export const getUserById = async (id?: string): Promise<any | undefined> => {

    try{

        let userModel = userEntity();

        //Search User By ID
        return await userModel.findById(id);

    }catch(error){

        LogError(`[ORM ERROR]: Getting user by id: ${error}`);

    }

}
// - Get User By Email
// - Delete User By Id
export const deleteUserById = async (id?: string): Promise<any | undefined> => {

    try{

        let userModel = userEntity();

        //Search User By ID
        return await userModel.deleteOne({ _id : id});

    }catch(error){

        LogError(`[ORM ERROR]: Deleting user by id: ${error}`);

    }


}
// - Create a new user
export const createUser = async (user: any): Promise<any | undefined> => {

    try{

        let userModel = userEntity();

        //Search User By ID
        return await userModel.create(user);

    }catch(error){

        LogError(`[ORM ERROR]: Creating user: ${error}`);

    }


}
// - Update a User By Id

export const updateUserById = async (user: any, id?: string): Promise<any | undefined> => {

    try{

        let userModel = userEntity();

        return await userModel.findByIdAndUpdate(id, user);

    }catch(error){

        LogError(`[ORM ERROR]: Updating user by id: ${error}`);

    }

}