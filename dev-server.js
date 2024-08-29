import {startDevServer} from 'xolus-cmp'
import http from 'http'
import { app } from "./app";

startDevServer({
    root: __dirname,
    currentFile: __filename,
    server: http.createServer(app)
})

