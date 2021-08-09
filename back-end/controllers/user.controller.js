const userModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUser = async (req, res)=>{
    const users = await userModel.find().select();
    res.status(200).json(users);
}

