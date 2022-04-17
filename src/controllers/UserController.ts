import { Get, Route , Tags , Query, Delete, Post, Put } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogInfo, LogWarning } from '../utils/logger';

//ORM - Users Collection
import { getAllUsers, getUserById , deleteUserById , createUser , updateUserById } from "../domain/orm/User.orm";

@Route("api/users")
@Tags("UserController")
export class UsersController implements IUserController {
        
    /**
     * Endoint to retrieve all users from "Users" of DB
     * @return {Promise<any[]>} Promise of Array of Users or User By Id
     */
    @Get("/")
    public async getUsers(@Query() id ? : string): Promise<any> {

        if(!id){

            LogSuccess('[/api/users]: Get all Users Request')
        
            const response = await getAllUsers();

            return response;

        }else{

            LogSuccess(`[/api/users]: Get User By Id Request: ${id}`)

            const response = await getUserById(id);

            return response;

        }
        
        
    }
    /**
     * Endpoint to delete a user by id
     * @param id Id of User to be deleted
     * @returns  User deleted
     */
    @Delete("/")
    public async deleteUser(@Query() id?: string): Promise<any> {
        
        let response : any = '';

        if(id){

            LogInfo(`[/api/users]: Delete user By Id : ${id}`)

            deleteUserById(id).then((r)=>{
                response = {
                    status: true,
                    message: `User ${id} Deleted`
                }
            })           

        }else{

            LogWarning(`[/api/users]: Delete User Request WITHOUT ID`)

            response = {
                status: false,
                message: `ID NO PROVIDED`
            }
        }
        
        return response;

    }
    /**
     * Endpoint to create a new user
     * @param user User to create
     * @returns message of success
     */
    @Post("/")
    public async createUser(user: any): Promise<any> {
        
        LogInfo(`[/api/users/]: Create User Request`)

        const response = await createUser(user);

        return {
            message : 'Creating new user'
        }

    }  

    @Put("/")
    public async updateUser(user: any, @Query() id?: string): Promise<any> {

        LogInfo(`[/api/users/]: Update User Request`)

        const response : any = await updateUserById(user, id);

        return {
            message : `User ${id} Updated`
        }


    }

}
