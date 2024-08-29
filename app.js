import {configure, renderPage, getSiteStats } from 'xolus'
import express, {Response, Request} from 'express';
import {join} from 'path'
import {createReadStream} from 'fs'
import App from './dist/App'

// Configure Xolus Renderer
configure({
    root: __dirname
})

// App exported 
export const app = express();

app.get('/', async (req, res)=>{
    res.setHeader('content-type','text/html');
    let html = '<H1>Error Page: Error Occured!</H1>'
    try {
        html = await renderPage(App, {username: ''})
    }catch (error) {
        throw error
    };
    res.status(200)
    .send(html);
})

app.get('/user/:name', async (req, res)=>{
    res.setHeader('content-type','text/html');
    let html = '<H1>Error Page: Error Occured!</H1>'
    try {
        html = await renderPage(App, {username: req.params.name||''})
    } catch (error) {
        throw error
    };
    res.status(200)
    .send(html);
})

// serve static files
app.use('/assets', express.static(join(__dirname, '/assets')));
app.use('/', express.static(join(__dirname, '/_sites')));




