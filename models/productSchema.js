const mongoose = require ('mongoose');
const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [50,"not more rhen 50 character"]
    },
    quantity: {
        type: String,
        required: true,
        trim :true

    }
})
module.exports = mongoose.model('Product' , productScheme)