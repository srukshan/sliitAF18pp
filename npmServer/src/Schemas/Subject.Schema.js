const Schema = require('mongoose').Schema

var Subject = new Schema({
    name: String,
    description: String,
    amount: Number,
    courseIds: [Schema.Types.ObjectId]
})

module.exports = Subject