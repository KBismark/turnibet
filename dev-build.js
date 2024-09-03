const {startDevServer} = require('xolus-cmp')
const http = require('http');
const {app} = require('./app')

startDevServer({
    root: __dirname,
    currentFile: __filename,
    server: http.createServer(app),
    compileOnly: true
})

