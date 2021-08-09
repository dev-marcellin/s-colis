const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(

    {
        nom: {
            type:String,
            required: true,
            minLength: 3,
            
        },
        prenom: {
            type: String,
            minLength: 3,
        },
        login: {
            type: String,
            unique: true,
            minLength: 3, 
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
            trim: true,
        },
        mdp: {
            type: String,
            required: true,
            max: 1024
        }
    },
    {
        timestamps: true,
    }
);
//play function before save 

userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt();
    this.mdp = await bcrypt.hash(this.mdp,salt);
    next();
} )

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;