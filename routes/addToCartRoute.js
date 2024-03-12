const express=require('express');
const { getCart,updateCart} = require('../controller/Add_to_cart_controller');
const router= express.Router();



// In addToCartRoute.js
router.get('/getcart', (req, res) => {
    console.log('GET /getcart route hit');
    getCart(req, res);
});

// router.post('/updatecart',(req,res)=>{
//     updateCart(req.res);
// })


module.exports  = router;






module.exports  = router;