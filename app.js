const {configure, renderPage, getSiteStats, saveToSites } = require('xolus')
const express = require('express');
const {join} = require('path')
const {mkdirSync} = require('fs')
const App = require('./dist/App').default;
const { set_db_dirictory } = require('guther');
const { dataRouter } = require('./routes/setMatches');
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
const app = express();

app.use(express.json())

app.get('/', async (req, res)=>{
    res.setHeader('content-type','text/html');
    let html = '<H1>Error Page: Error Occured!</H1>'
    try {
        html = await renderPage(App, {username: ''});
        saveToSites('/', html)
    }catch (error) {
        throw error
    };
    res.status(200)
    .send(html);
});

app.get('/admins/update-the-site',async (req, res)=>{
    res.setHeader('content-type','text/html');
    let html = ''
    try {
        html = await renderPage(App, {username: ''});
        saveToSites('/', html);
        html = '<H1>Page Successfully Updated!</H1>'
    }catch (error) {
        html = '<H1>Oops! An Error Occured.</H1>';
    };
    res.status(200)
    .send(html);
})

app.use('/data', dataRouter)

app.use('/data',(req, res, next)=>{
    if(req.responseType = 'json'){
        return res.status(500).json({errored: true})
    }
    next()
})
// serve static files
app.use('/assets', express.static(join(__dirname, '/assets')));
app.use('/', express.static(join(__dirname, '/_sites')));

// Error Handler
app.use((err, req, res, next)=>{
    let html = '<!DOCTYPE html><html lang="en"><body><H1>404! ~ Page Not Found</H1></body></html>';
    res.setHeader('content-type','text/html');
    res.status(404)
    .send(html);
})
module.exports = {app}


