const Express = require('express')
const router = Express.Router()

const controller = require('../Controllers/Subject.Controller')

router.get('/', (req, res) => {
    controller.findAll()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send({message: err}))
})

router.get('/:id', (req, res) => {
    controller.findById(req.params.id)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send({message: err}))
})

router.post('/',(req, res) => {
    controller.insert(req.body)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send({message: err}))
})

module.exports = router