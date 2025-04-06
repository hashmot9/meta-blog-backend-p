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


const allowedOrigins = [
  "http://localhost:5173",
  "https://my-meta-blogs-project.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // if you're using cookies or auth headers
}));

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
