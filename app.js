const {configure, renderPage, getSiteStats } = require('xolus')
const express = require('express');
const {join} = require('path')
const {mkdirSync} = require('fs')
const App = require('./dist/App').default;
const { set_db_dirictory } = require('guther');
const dataDirectory = join(__dirname, '/data');

// create data directory if not exist
try {
    mkdirSync(dataDirectory)
} catch (error) {
    if(error.code!=='EEXIST'){
        throw error
    }
}
set_db_dirictory(join(__dirname, '/data'))

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




