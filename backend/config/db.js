const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const DBURL = process.env.DBURL ;
console.log(DBURL)
if(!DBURL){
  throw new Error('DBURL is not defined in .env')
}


module.exports = async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/HamiMinimarket' , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("database connected successfully");
  } catch (err) {
    console.log("errror aya dhacay", err);
  }
};
