import mongoose from "mongoose";

export const userEntity = () => {

    let userSchema = new mongoose.Schema({

        name : String,
        email : String, 
        edad : Number,

    });

    return mongoose.models.Users ||   mongoose.model('Users', userSchema);

}