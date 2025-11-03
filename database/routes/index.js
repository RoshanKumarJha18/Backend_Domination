var express = require('express');
var router = express.Router();
const userModel = require('./users'); //=>importing user model from users.js

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//this is for creating a new user using create in the database and for reading the data from database we will use find , findOne etc methods and for updating we will use updateOne , updateMany etc methods and for deleting we will use deleteOne , deleteMany methods
// router.get('/create', async function(req, res, next) { 
//  const data = await userModel.create({
//     username:"hiteshi16",
//     name:"Hiteshi Muddham",
//     age:19
//   })
//   res.send(data);
// });
router.get('/read', async function(req, res, next) { 
 const remove = await userModel.find();
  res.send(remove);
});

module.exports = router;
