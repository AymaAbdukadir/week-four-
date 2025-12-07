const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
   image : String ,
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
