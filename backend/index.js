const express = require("express");
const app = express();
const mongoose = require('mongoose');
const { MONGODB_CONFIG } = require('./src/config/db.config');
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 4000;

mongoose.Promise = global.Promise;

mongoose.set('strictQuery', true);
mongoose
  .connect(MONGODB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected!!");
    },
    (error) => {
      console.log("Database can't be connected:" + error);
    }
  );

//For Implementing the CORS = Cross Origin Resources Sharing
app.use(cors({
    origin : "*",
}));
//Routes of all app
app.use("/api", require("./src/routes/app.route.js"));


//Listen Function
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
