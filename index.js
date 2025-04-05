const express = require("express");
const app = express();
// cors middle requests
const cors = require("cors");
// mongoose requests
const mongoose = require("mongoose");
const router = require("./src/router/Blog-router");


// dotenv file includes
require("dotenv").config();
const port = process.env.PORT || 3000;

// Middleware of json and cors
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    mathod: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Routes
app.use('/api/v1/blog',router)

// username and password
// hashmotali561
// G0DdE8J66U1oPr0a

// mongoose and mongodb connections
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);

  app.get("/", (req, res) => {
    res.send("My meta blogs app is running....!");
  });
}
main()
  .then(() => console.log("Mongodb connection is running..."))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
