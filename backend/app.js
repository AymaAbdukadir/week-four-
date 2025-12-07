const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");
const cors = require("cors");
const User = require("./Model/userModel");
const Products = require("./Model/productModel");
const Cart = require("./Model/CartModel");

dotenv.config();


const port = process.env.PORT || 8000;
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.post("/register", (req, res) => {
  console.log("Incoming request body:", req.body);

  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { userEmail, userPassword } = req.body;

  User.findOne({ userEmail: userEmail }).then((user) => {
    if (user) {
      if (user.userPassword == userPassword) {
        res.json("success");
      } else {
        res.json("password is incorrect");
      }
    } else {
      res.json("no record existed");
    }
  });
});

app.get("/products", async (req, res) => {
  const products = await Products.find();
  res.send(products);
  // console.log('products' , products)
});

app.post("/add-to-cart", async (req, res) => {
  try {
    await Cart.create(req.body);

    console.log("request", req.body);
    console.log("added to the cart");

    res.status(201).json({ message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

app.get("/carts", async (req, res) => {
  const carts = await Cart.collection.find().toArray();
  res.send(carts);
  console.log("yes");
});

app.put("/cart/:id/update-quantity", async (req, res) => {
  const { type } = req.body; // "increase" or "decrease"

  try {
    const cartItem = await Cart.findById(req.params.id);
    if (!cartItem) return res.status(404).send("Item not found");

    if (type === "increase") {
      cartItem.quantity += 1;
    }

    if (type === "decrease" && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    }

    await cartItem.save();
    res.send(cartItem);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/carts/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Cart.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    console.log(`Deleted item with ID: ${id}`);
    res.status(200).json({ message: "Item removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete item" });
  }
});

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
