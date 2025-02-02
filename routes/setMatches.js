const express = require('express');
const {join} = require('path');
const { getHeroDays, getTodaysDate } = require('../utils');
const { insert, get, update, set_db_dirictory } = require('guther');

// set_db_dirictory(join(__dirname, '../data'))

const router = express.Router({caseSensitive: false});


router.post('/daily-tips',async (req, res, next)=>{
    req.responseType = 'json';
    if(!req.body){
        return next()
    }
    const today = getHeroDays().pop();
    const id = 'daily-tips';
    let data = null
    try {
        data = await get({id})
    } catch (error) {
        return next()
    }
    
   try {
    data[today] = req.body;
    await update({id, data})
   } catch (error) {
    return next()
   }
   res.status(201).json({errored: false})
})

router.get('/daily-tips',async (req, res, next)=>{
    req.responseType = 'json';
    const today = getHeroDays().pop();
    const id = 'daily-tips';
    let data = null
    try {
        data = await get({id})
    } catch (error) {
        return next()
    }
   res.status(200).json(data[today])
})

router.post('/tips/:path',async (req, res, next)=>{
    req.responseType = 'json';
    if(!req.body){
        return next()
    }
    let isResultUpdate = req.query&&req.query.type;
    const id = `${req.params.path}`.toLowerCase();
    let data = null
    try {
        data = await get({id})
    } catch (error) {
        return next()
    }
    if(isResultUpdate){
        data.today = req.body;
        try {
            await update({id, data});
        } catch (error) {
            return next()
        }
    }else{
        try {
            const holder = data.previous;
            data.previous = data.today;
            data.today = req.body;
            if(id==='free-tips'){
                data.previous.title = holder.title;
                data.previous.id = holder.id;
                data.previous.date = holder.date;
                data.today.date = getTodaysDate();
            }else{
                data.holder = holder;
                data.date = data.date||{};
                data.date.previous = data.date.today;
                data.date.today = getTodaysDate();
            }
            await update({id, data})
        } catch (error) {
            return next()
        }
    }
  
   res.status(201).json({errored: false})
})

router.get('/tips/:path',async (req, res, next)=>{
    req.responseType = 'json';
    const id = `${req.params.path}`.toLowerCase();
    let data = null
    try {
        data = await get({id})
    } catch (error) {
        return next()
    }
   res.status(200).json(data.today)
});

router.get('/download/:path',async (req, res)=>{
    const id = `${req.params.path}`.toLowerCase();
    let data = null
    try {
        data = await get({id})
    } catch (error) {
        return res.status(404).end()
    }
    res.download(join(__dirname,`../data/${id}.json`),`${id}.json`);
//    res.status(200).json(data.today)
})

module.exports = {dataRouter: router}