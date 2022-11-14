const orderService = require('../services/order.services');
const {STATUS} =  require('../config/order.constants');

const addProduct = async(req,res) =>{
    //get user's order which is in creation status
    let order = await orderService.getOrderByUser(req.user, STATUS.CREATION);
    
    if(!order){
        //if no existing order in creation status, then create a new order
        order = await orderService.createOrder(req.user);
    }

    let response =await orderService.addProductToOrder(req.body.productId, order.id);

    if(response){
         return res.json({
         status: 200,
         success: true,
         message: 'Successfully added product to order'
         });
    }
}

const removeProduct = async(req, res) =>{
    let order = await orderService.getOrderByUser(req.user, STATUS.CREATION);
    if(!order){
        return res.json({
            status: 400,
            success: true,
            message: 'No product in order'
        });
    }
    
    const response = await orderService.removeProductFromOrder(req.body.productId, order.id);

    if(!response){
        return res.json({
            status: 500,
            success: true,
            message: 'Internal server error'
        });
    }
    if(response.error){
        return res.json({
            status: 400,
            success: true,
            message: response.error
        });
    }
    return res.json({
        status: 200,
        success: true,
        message: 'Product removed from order successfully'
    });

}



module.exports = {addProduct, removeProduct}


