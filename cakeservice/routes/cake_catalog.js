var express=require('express');
var router=express.Router();
const cakeController=require('./db_collection/cake_controller');

//GET => /books/list - list all books from json file
router.get('/getallcakes', cakeController.getAllCakes)
router.get('/getcakesbyname/:cname', cakeController.getCakesByName)
router.get('/getcakesbyprice/:c1/:c2', cakeController.getCakesByPrice)

module.exports=router;