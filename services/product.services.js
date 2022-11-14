const {Product,Category} = require('../models/index')
const {Op} = require('sequelize');


const getAllProducts = async() => {
    const response = await Product.findAll();
    return response;
}

const getProductsWithCategories = async() => {
    const response = await Product.findAll({include: Category});
    return response;
}

const createNewProduct = async(data) => {
    const newProduct = await Product.create({
        name : data.name,
        description : data.description,
        cost : data.cost,
        category_id : data.category_id
    })
    return newProduct;
}

const getProductsById = async (idData) => {
    const response = await Product.findAll({
        where:{
            id: idData
        }
    })
     return response;
}

const updateProduct = async(productId,data) => {
    const response = await Product.update(
        
        { name : data.name,
            description : data.description,
            cost : data.cost,
            category_id : data.category_id },{
        
        where:{
            id: productId
        }
    })
     return response;
}

const deleteProduct = async(ProductId) => {
    const response = await Product.destroy(
        
        {
        where:{
            id: ProductId
        }
    })
     return response;
}


const getAllProductsByCategoryId = async (category_id) => {
    const response = await Product.findAll({
        where:{
            category_id: category_id
        }
    })
     return response;
}

const getProductsbyCostRange = async(data) =>{
    const response = await Product.findAll({
        where:{
            cost: {
                [Op.between]: [data.minCost, data.maxCost]}
        }
    })
     return response;
}


module.exports = {getAllProducts, createNewProduct, getProductsById, getProductsWithCategories, updateProduct, deleteProduct, getAllProductsByCategoryId, getProductsbyCostRange}