const Bundler = require('parcel-bundler')
const Express = require('express')
const Routes = require('./Routes')
const ClientRoutes = require('./ClientRoutes')

const port = 3000;

const bundler = new Bundler('./public/static/index.html')

const app = Express()

app.use(Express.json())

app.use('/api', Routes)

app.use(bundler.middleware())

app.use('/',ClientRoutes)

app.listen(port, err => {
    if(err) {
        console.error(err)
        return
    }

    console.log(`Server is running on ${port}`)
})