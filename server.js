const express = require('express');
const app = express();
const path = require('path');
const bodyParser=require('body-parser');
const methodOverride =require('method-override');
const addToCardRoute = require('./routes/addToCartRoute');
const addToCart = require('./model/sale_HistoryDB');

 
const port = 6001;
app.set('view engine', 'ejs');
app.use('/views',express.static('views'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets', express.static('assets'));
app.use('/public', express.static('public'));
app.use('/controller', express.static('controller'));
app.use(addToCardRoute);



app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
})


app.get('/contactUs',(req,res)=>{
    res.render('contactUs.ejs');
})
app.get('/addtocart',async (req,res)=>{
    const result = await addToCart.getAllDataInBill();
    res.render('myCart',{billinfos:result})
})
app.post('/updatecart', (req, res) => {
    const { cartItems } = req.body;
    // Process the cartItems data as needed
    console.log('Received cartItems:', cartItems);
    
  });
  

app.listen(port,()=>{
    console.log(`webstore_frontend is listening at ${port}`);
})