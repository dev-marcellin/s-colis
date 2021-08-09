const { findById } = require('../models/user.model');
const userModel = require('../models/user.model');
const gerantModel = require('../models/gerantAgence.model');
const brancheModel = require('../models/gerantBranche.model');

module.exports.signUpAgence = async (req, res)=>{
const {nom, prenom, login, email, role, mdp, nomAgence, siege,reference }= req.body

    try{
        const user = await userModel.create({nom, prenom,login, email, role, mdp});
        const gerant = await gerantModel.create({nomAgence, siege, reference: user._id });

        res.status(201).json({user: user._id, gerant: gerant._id});
    }catch(err){
        res.status(200).send({err})
        console.log(err);
    }
}

module.exports.signUpBranche = async (req, res)=>{
    const {nom, prenom, login, email, role, mdp, nomBranche, localisation,reference}= req.body

    try {
        const user = await userModel.create({nom, prenom,login, email, role, mdp});
        const branche = await brancheModel.create({nomBranche, localisation, reference: user._id,});

//ici on met l'id de la branche dans le gerant qui créé la branche

await gerantModel.findByIdAndUpdate(
    req.params.id,
   {
       $addToSet: {
           idBranche: branche._id
       }
   },
   {new: true, upsert: true},
   //(err,docs)=>{
    //   if(!err) res.status(200).json({ colis: colis._id, etat: etat._id });
     //  else  return res.status(400).json(err) ;

  // } 
   )


        res.status(201).json({user: user._id, branche: branche._id});
    }catch(err){
        res.status(200).send({err})
        console.log(err);
    }
}



module.exports.getAll = (req, res)=>{
    
}