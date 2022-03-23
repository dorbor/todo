const express = require("express");

const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello World"));

// Use Routes
app.use("/api/todo", require("./routes/api/todo"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
