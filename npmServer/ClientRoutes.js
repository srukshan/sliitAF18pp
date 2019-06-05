const Express = require('express')
const Route = Express.Router();

Route.use(Express.static('./dist'))

Route.get('/', (req, res) => {
    res.sendFile('index.html')
})

module.exports = Route