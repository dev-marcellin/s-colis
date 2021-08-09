const colisModel = require("../models/colis.model");




module.exports.gain = async (req, res)=>{


    try {

        let  som=0;
        const gain = await colisModel.find().select().exec();
       // res.status(200).json(gain);
        for(i=0; i<gain.length; i++){
                som+=gain[i].prix;
           // console.log(gain[i].prix);
        }
        res.status(200).json(som);
       

    } catch (error) {
        console.log(error);
    }
}