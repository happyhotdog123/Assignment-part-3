
var mongoose = require('mongoose')
const server = 'mongodb://khng0228:Bf4c0b67@ds145379.mlab.com:45379/305cde_167240418'
console.log('connect to server: '+server)
mongoose.connect(server)
const db = mongoose.connection
var Schema = mongoose.Schema

var listSchema = new Schema({
    username:{ type: String, required: true },
    name: { type: String, required: true },
    items: [ {type: String} ]
})

exports.List = mongoose.model('Lists', listSchema)

exports.addItem = function(json) {
  db.collection('lists').insert(json)
}
