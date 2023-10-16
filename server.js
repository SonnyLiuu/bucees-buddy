require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const authenticateRoutes = require("./routes/authenticate");
const tripRoutes = require("./routes/trip");
const userRoutes = require("./routes/user");

// express app
const app = express();


// middleware
app.use(express.json());


// routes
app.use("/api", authenticateRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/user", userRoutes);

app.use(express.static(path.join(__dirname + "/frontend/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  })
}

const port = process.env.PORT || 2500;
app.listen(port, console.log(`Listening on port ${port}...`));


//This is where mongoose connects to the MongoDB 
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("connected to the db and listening on port", process.env.PORT)
})
.catch((error) => {
  console.log("Could not connect to database!");
  console.log(error)
})