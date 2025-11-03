// install mongodb community server from mongodb website
//npm install mongoose
//require and setup connection

const { name } = require('ejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/practiseDB') //the localhost should be 127.0.0.1:27017 not localhost:27017
.then(() => console.log("connection ✅  successful"))
.catch((err) => console.log(err));
//make schema => schema is like blueprint of collection and collection is like table in sql database

const userDB = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

//create model and export it => model is like collection in mongodb
module.exports = mongoose.model("user",userDB); 