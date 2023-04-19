const product = require('../models/productSchema')


const getAllProduct = async(req , res)=>{
    try{
        const product = await Product.find({})
        if(product.length < 1){
            res.status(200).json({
                msg: " no product found"
            })
            return
        }
        if(product){
            res.status(200).json({
                data:product
            })
        }
    } catch(error){
        res.status(404).json({
            msg:" therese was error finding product"

        })
    }
}
const createNewProduct =async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(201).json({
            data: {
                product
            }
        })

    }catch(error){
        res.status(200).json({
            msg:" therese was error finding product"

        })

    }
}

const deleteProduct = async (res,req)=>{
    try{
        const {
            id: productID
        }=req.params
        const product = await Product.findOneAndDelete({
            _id: productID
        })
        if(!product){
            return
        }
        res.status(200).json({
            data :{
                msg:"product deleted"
            }
        })
    }catch(error){
        res.status(400).json({
            msg: error

        })
    }

}

const updateProductQuality = async(req,res)=>{
    try {
        const {
            id: productID
        }=req.params
        const{
            number
        }=req.quary
        if(!number){
            res.status(400).json({
                data: {
                    msg: "Errior while updating quality"
                }
            })
            return
        }
        const product = await Product.findOne({
            _id: productID
        })
        // adding the new number feom the quary params and the previus number of product
        let newQunatity = product.qunatity+(+number)

        if (newQunatity > 0){
            //updating date in the database
            const updateProduct = await Product.findOneAndUpdate({
                _id: productID

            },{
                qunatity: newQunatity
            },{
                new: true,
                runValidators: true
            })
            res.status(200).json({
                data: {
                    updateProduct,
                    msg:"successfully updated"
                }
            })
        } else {
            res.status(400).json({
                data: {
                    msg: "product cannot be less then zero"
                }
            })
            return
        }

    }catch(error){
        res.status(400).json({
            date: {
                msg:"error while updating quality"
            }
        })
    }
}
module.exports ={
    getAllProduct,
    createNewProduct,
    deleteProduct,
    updateProductQuality

}