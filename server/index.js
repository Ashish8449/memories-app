import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "../Server/routes/post.js";
// import userRoutes from "../Server/routes/user.js";
import dotenv from "dotenv";
import { getPosts } from "./controllers/post.js";

const app = express();
dotenv.config();

// middleware :
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URI = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// mongodb connection uri
// mongoose
//   .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("mongodb is connected");
//     app.listen(PORT, () => {
//       console.log("on port 5000");
//     });
//   })
//   .catch((error) => {
//     console.log("mondb not connected");
//     console.log(error);
//   });
mongoose.connect(CONNECTION_URI, function (err) {
  if (err) {
    console.error(err);
  } else {
    app.listen(5000);
    console.log("Connected");
  }
});

// routes
app.use("/posts", postRoutes);
// app.use("/user", userRoutes);
// app.get("/posts", getPosts);
app.get("/", (req, res) => {
  res.send("fdjkdfjdkfjdkj");
});
