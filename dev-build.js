const {startDevServer} = require('xolus-cmp')
const http = require('http');

startDevServer({
    root: __dirname,
    currentFile: __filename,
    server: http.createServer((reg,res)=>{}),
    compileOnly: true
})

