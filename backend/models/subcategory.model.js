import mongoose , { Schema } from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const SubCategory = mongoose.model("SubCaegory",subCategorySchema)

export default SubCategory