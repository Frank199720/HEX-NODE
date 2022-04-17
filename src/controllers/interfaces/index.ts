import { BasicResponse } from '../types/index';


export interface IHelloController {

    getMessage( name? : string ): Promise<BasicResponse>;

}


export interface IUserController { 

    //Read all users for database
    getUsers( id ?: string): Promise<any>
    //Delete User By Id
    deleteUser( id ?: string ): Promise<any>
   //Create a new user
    createUser( user : any ): Promise<any>
    //Update a user
    updateUser( user : any , id?: string ): Promise<any>



}