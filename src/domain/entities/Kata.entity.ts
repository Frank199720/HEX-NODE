import mongoose from "mongoose"

export const kataEntity = ()=>{

    let kataSchema = new mongoose.Schema(
        {
            Name : String,
            Description : String,
            Level : Number,
            User : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'User',
                required : true,
           },
           Date : {
                type : Date,
                default : Date.now

           },
           Valoration : Number,
           Chances : Number,
        }
    );

    return mongoose.model('Kata', kataSchema);

}