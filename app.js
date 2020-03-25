var express = require('express');
const app = express();
const port = 3600;
const indexRouter =  require('./routes/index.js')
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(indexRouter);
app.listen(port, ()=>{
    console.log('Listening on port ', port);
});