const { app } = require('./app');
app.use('/sportstips', app);
console.log(app);

const PORT = process.env.PORT;
// app.listen(()=>{
//     console.log('Server running at port '+ PORT);
//     console.log('See http://localhost:'+ PORT);
// })

