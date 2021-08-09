const { isValidObjectId } = require('mongoose');
const colisModel = require('../models/colis.model');
const etatModel = require('../models/etat.model');
const genererCode = require('../traitements/fonctions');
const brancheModel = require('../models/gerantBranche.model')
const ObjectID = require('mongoose').Types.ObjectId;
const ticketModel = require('../models/ticket.model');

module.exports.register = async (req, res)=>{

   
const {code, description, nombre, poids, valeur, depart, destination, prix, nomExp, telExp, cniExp, nomDest, telDest}= req.body

 

try{

    const count = await colisModel.find().select().count();
    //on enregistre le colis
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu : '+req.params.id)

    const colis = await colisModel.create({code: genererCode(depart,destination,count), description, nombre, poids, valeur, depart, destination, prix, nomExp, telExp, cniExp, nomDest, telDest, reference:req.params.id});
    //on créé directement un etat du colis 
    const etat = await etatModel.create({idColis: colis._id})
console.log(genererCode(depart,destination,count));
    //ici on ajoute l'id du colis créé dans le champ idcolis du gerant de branche 
    await brancheModel.findByIdAndUpdate(
        req.params.id,
       {
           $addToSet: {
               idColis: colis._id
           }
       },
       {new: true, upsert: true},
       (err,docs)=>{
           if(!err) res.status(200).json({ colis: colis._id, etat: etat._id });
           else  return res.status(400).json(err) ;

       } )
       
       const ticket = await ticketModel.create({operation: "expédition",idColis: colis._id})

    //res.status(201).json({colis: colis._id, etat: etat._id});
}catch(err){
    res.status(200).send({err})
     console.log(err);
}

}


//changer l'etat du colis
module.exports.setEtat = async (req,res)=>{
   // if(!ObjectID.isValid(req.params.id))
        //return res.status(400).send('ID inconnu : '+req.params.id)
    
        //ici on recherche l'etat correspondat au colis en recherchant l'id du colis dans le champs idcolis des etat puis dans 
        //dans l'etat qui correspond on recupere son id et on y ajoute un nouvel etat
    try{
        const colis = await etatModel.findOne({idColis: req.body.id}, '_id').exec();
        console.log("id de l'etat du colis   "+colis.id);
     
        await etatModel.findByIdAndUpdate(
             colis.id,
            {
                $addToSet: {
                    etat: new Date()
                }
            },
            {new: true, upsert: true},
            (err,docs)=>{
                if(!err) res.status(201).json(docs);
                else  return res.status(400).json(err); 
                    
            }
        )
    }catch(err){
        return res.status(500).json({message: err});
        console.log(err);
    }
}

module.exports.historique = async (req, res)=>{

    try {
        const tempo=[];
       const colis = await colisModel.find().select();
        for(i = 0 ; i<colis.length; i++){
         if(colis[i].createdAt.toString().substr(0,13) == req.body.date){
            tempo.push(colis[i]);
           
         }
          
           
        }
        

       res.status(200).json(tempo);
    } catch (error) {
        console.log(error);
    }
}