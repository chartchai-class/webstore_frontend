
const bookTable = require('../model/bookDB');
const addToCart = require('../model/sale_HistoryDB');
const categories

const getCart = async (req, res) => {
    console.log('getCart controller function called.');

    try {
        const categories = await bookTable.
       const result = await addToCart.getAllDataInBill();
        res.render('component/cartinfo',{billinfos:result})
    } catch (error) {
        console.error("Error fetching data from the database:", error);
        res.status(500).send("Internal Server Error");
    }
};

const updateCart = async (req,res)=>{
    console.log('updateCart controller function is called.');
    const { cartItems } = req.body;
    console.log('Received cart items:', cartItems);
    try {
        const result = await cartItems.map((item) => {
            return updateQuantity(item);
          
          });
          console.log("Updated",result);
          res.render('component/orderSummary',{updatedCart:result})
        
    } catch (error) {
        console.error("Error fetching data from the database:", error);
        res.status(500).send("Internal Server Error");
    }
}



module.exports={
    getCart,updateCart
}