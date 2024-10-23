const { app } = require('./app');
app.use('/sportstips', app);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log('Server running at port '+ PORT);
    console.log('See http://localhost:'+ PORT);
})

