import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/index";
const bodyParser = require("body-parser");
require("dotenv").config();
const app: Express = express();
// const fs= require('fs');
const teachers = require("./utils/data/teachers");
const PORT: string | number = process.env.PORT || 5000;

// console.log(teachers)

// const uris="mongodb+srv://vedansh:vedansh@coursera.03cjh.mongodb.net/coursera?retryWrites=true&w=majority"
const URI: string = process.env.MONGODB_URI || "";
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("body-parser").urlencoded({ extended: false }));

// const uri:string = process.env.MONGODB_URI|| `mongodb://localhost:27017/linkdenLearning`
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);

app.use(route);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("../../../frontend/build/index.html"));
}

// console.log(teachers)
// let file=fs.readFileSync("./utils/data/teachers");

// console.log(file)

mongoose
  .connect(URI, options)
  .then(() =>
    app.listen(PORT, () => console.log(`server lets see hosted on ${PORT}`))
  )
  .catch((err) => {
    console.log(
      process.env.MONGODB_URI,
      process.env.AWS_ACCESS_KEY_ID,
      process.env.AWS_SECRET_ACCESS_KEY,
      process.env.NODE_ENV
    );
    console.log(err);
  });

// app.listen(3000,()=>console.log("connected"))
