const express = require('express');
const app = express();
const path = require('path');
const bodyParser=require('body-parser');
const methodOverride =require('method-override');

 
const port = 6001;
app.set('view engine','ejs');
app.use(express.json());
app.use('/assets', express.static('assets'));
app.use('/public', express.static('public'));


app.use(express.static(path.join(__dirname,'views')));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
})


app.get('/contactUs',(req,res)=>{
    res.render('contactUs.ejs');
})
app.listen(port,()=>{
    console.log(`webstore_frontend is listening at ${port}`);
})