const mongoose = require("mongoose");

// connectDB builds the connection to mongoDb through mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/spare-time");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
