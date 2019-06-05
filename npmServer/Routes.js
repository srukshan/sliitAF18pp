const Express = require('express')
const Route = Express.Router()

const CourseRoutes = require('./src/Routes/Course.Routes')
const SubjectRoutes = require('./src/Routes/Subject.Routes')

Route.use('/courses', CourseRoutes)
Route.use('/subjects', SubjectRoutes)

module.exports = Route