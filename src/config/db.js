const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB Successfully ");
  } catch (error) {
    console.error("Database Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
