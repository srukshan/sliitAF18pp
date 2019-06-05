const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var Course = new Schema({
    name: String,
    code: String,
    mark: Number,
    lecturer: String,
    subjectIds: [Schema.Types.ObjectId]
})

module.exports = Course