import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("server is running on portal 3000");
});
