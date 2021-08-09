//const { findById } = require('../models/');
//const ticketModel = require('../models/ticket.model');
const colisModel = require('../models/colis.model')



module.exports.print = async (req, res)=>{

    

    try{
        await colisModel.findById(
            req.body.id,
            (err, data)=>{
                if(!err) res.status(200).json(data);
                else return res.status(400).send({err: err})
            }

        )
    
    }catch(err){
        console.log(err)
    }
}