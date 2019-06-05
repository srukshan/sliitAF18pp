const mongoose = require('../Schemas/SchemaMapper')

const Subject = mongoose.model('Subject')

const CourseController = require('./Course.Controller')

var SubjectController = () => {
    this.findAll = () => {
        return new Promise((resolve, reject) => {
            Subject.find().exec()
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    this.findById = (id) => {
        return new Promise((resolve, reject) => {
            Subject.findById(id).exec()
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    this.findByCourseId = (id) => {
        return new Promise((resolve, reject) => {
            Subject.find({ courseIds : id }).exec()
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let courses = data.courseIds
            if(courses == null || !(courses instanceof Array)){
                reject("courseIds type Error")
            }
            courses.forEach(course => {
                CourseController.findById(course).catch(err => reject(err))
            });
            let subjectObject = new Subject({
                name: data.name,
                description: data.description,
                amount: data.amount,
                courseIds: data.courses
            })
            Course.create(subjectObject)
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}

module.exports = SubjectController