import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description : String
});

const Category = new mongoose.model("Category",categorySchema)

export default Category