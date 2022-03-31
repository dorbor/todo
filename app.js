const express = require("express");
const path = require("path");

const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("Hello World"));

// Use Routes
app.use("/api/todo", require("./routes/api/todo"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/logout", require("./routes/api/logout"));
app.use("/api/todoAPi/", require("./routes/api/todoApi"));

// serve static access in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
