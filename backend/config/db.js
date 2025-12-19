const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const DBURL = process.env.atlas_URL;

console.log(DBURL)
if(!DBURL){
  throw new Error('DBURL is not defined in .env')
}


module.exports = async function connectDB() {
  try {
    await mongoose.connect(DBURL , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("database connected successfully");
  } catch (err) {
    console.log("errror aya dhacay", err);
    process.exit(1);
  }
};
