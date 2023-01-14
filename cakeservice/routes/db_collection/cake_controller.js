const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bakery')
console.log("Connection established successfully")
mongoose.set('strictQuery',false);
let cakeModel=require('./cake.model')
exports.getAllCakes=(req,res)=>{
    cakeModel.find()
    .then(cake=>res.send(cake))
     .catch(error=>res.status(500).send(error))
     }
exports.getCakesByName = (req,res)=>{
         cakeModel.find({name: req.params.cname})
          .then(cake=>{
            if(cake.length>0)
            res.send(cake)
            else
            res.status(404).send({Message: "Cake not available"})
        })
        .catch(error=>res.status(500).send(error))
    }
exports.getCakesByPrice = (req,res)=>{
        cakeModel.find( { price: { $gt: req.params.c1, $lt: req.params.c2} } )
         .then(cake=>{ if(cake.length>0)
             res.send(cake)
              else
               res.status(404).send({Message: "Cakes not available in this price range"})
            })
             .catch(error=>res.status(500).send(error))
        }