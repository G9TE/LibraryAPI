require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
