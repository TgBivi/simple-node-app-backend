import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello Express + nodemone");
});

// app.get("/api/product/:id", );
// app.put("/api/product/:id", );

// app.delete("/api/product/:id", );

//console.log("Hello world");

mongoose
  .connect(
    "mongodb+srv://TG:WGtLPbLoXa0L8RUo@nodeexpress.ey3uo.mongodb.net/?retryWrites=true&w=majority&appName=nodeExpress"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Hello port");
    });
  })
  .catch(() => {
    console.log("Db connection failed");
  });
