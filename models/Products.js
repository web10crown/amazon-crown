import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    brand: String,
    desc: String,
    cat: String,
    price: Number,
    img: String,
  },
  { collection: "products", timeStamps: true }
);

module.exports =
  mongoose.models.products || mongoose.model("products", ProductSchema);
