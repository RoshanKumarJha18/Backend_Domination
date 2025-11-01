//showing how to export a single value
let a = 90

module.exports = a
//you can also export multiple values using an object
// module.exports = {
//   a:90,
//   b: 'roshan',
//   c: 'kumar'
// }    
//then you can import them using destructuring
//let {a,b,c} = require('./export.js')