const Koa = require('koa')

const app = new Koa()
require('./lib/router')(app)

const PORT = process.argv.slice(2)[0] || 7000
app.listen(PORT)

console.log(`Server running at http://127.0.0.1:${PORT}/`)
