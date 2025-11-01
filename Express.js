const { name } = require('ejs')
const express = require('express')
const app = express()

//1)install ejs using npm i ejs
//2)create a folder named views in the root directory
//3)create a file named index.ejs can  be any name but should have .ejs, extension
//4)write some html code inside index.ejs file
//5)set the view engine to ejs using app.set method app.set('view engine', 'ejs');
app.set('view engine', 'ejs') 

//6)use res.render method to render the ejs file inside a route and write the file name without the extension like this in ejs file 
app.get('/home', (req, res) => {
  res.render('index',{name: 'Roshan Kumar Jha' }) // we can also pass data to the ejs file using an object as the second parameter
})

// Middleware function we can use app.use to define middleware that will be executed for every request to the server and the use is to perform some operations before sending a response to the client
app.use((req,res,next)=>{
  console.log('Middleware called')
  next()// Proceed to the next middleware or route handler
  
})

// Route handlers we can define routes using app.get, app.post, app.put, app.delete etc
app.get('/', (req, res) => {
  res.send('Hello Chutiya')
})

// Dynamic route examplem we should use : to define a dynamic route and can be accessed using req.params and the value can be anything
app.get('/profile/:username', (req, res) => {
  res.send(`Hello from ${req.params.username}`)
})

// to serve static files like images, css, js files from a folder named public in the root directory and should not write /public in the url and can access directly using the file name
app.use(express.static('public')) 


app.listen(3000)