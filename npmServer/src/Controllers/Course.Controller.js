const mongoose = require('../Schemas/SchemaMapper')

const Course = mongoose.model('Course')

const SubjectController = require('./Subject.Controller')

var CourseController = () => {
    this.findAll = () => {
        return new Promise((resolve, reject) => {
            Course.find().exec()
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    this.findById = (id) => {
        return new Promise((resolve, reject) => {
            Course.findById(id).exec()
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let subjects = data.subjectIds
            if(subjects == null || !(subjects instanceof Array)){
                reject("subjectIds type Error")
            }
            subjects.forEach(subject => {
                SubjectController.findById(subject).catch(err => reject(err))
            });
            let courseObject = new Course({
                name: data.name,
                code: data.code,
                mark: data.mark,
                lecturer: data.lecturer,
                subjectIds: subjects
            })
            Course.create(courseObject)
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}

module.exports = CourseController