const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  id: { type: String, allowNull: false },
  name: { type: String, allowNull: false },
  price: { type:Number, allowNull: false },
   description: { type:String, allowNull: false },
  image: { type: String, allowNull: false },

},
     { versionKey: '_somethingElse' },                                      
     {
    timestamps:true
});

const Products = mongoose.model("products2", productsSchema);

exports.Products = Products;
