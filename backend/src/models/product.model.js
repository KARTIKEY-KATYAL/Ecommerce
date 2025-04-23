import mongoose , { Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  image: String,
  productCode: String,
  description: String,
  Category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Product = mongoose.model("Products", productSchema);

export default Product;