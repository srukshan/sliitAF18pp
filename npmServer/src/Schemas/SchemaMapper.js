const Mongoose = require('mongoose')

const Course = require('./Course.Schema')
const Subject = require('./Subject.Schema')

const DB = 'sliitpp18'

Mongoose.model('Course', Course)

Mongoose.model('Subject', Subject)

Mongoose.connect(`mongodb://localhost:27017/${DB}`).catch(err=>{
    console.error(err)
    process.exit(-1)
})

module.exports = Mongoose