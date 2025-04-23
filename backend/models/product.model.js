import mongoose , { Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  image: String,
  productCode: String,
  description: String,
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
});

const Product = mongoose.model("Products", productSchema);

export default Product;