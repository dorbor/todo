const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Mongo DB connected successfully");
  } catch (error) {
    console.error(error.message);

    // The below method will exit the process, should there be a failure
    process.exit(1);
  }
};

module.exports = connectDB;
