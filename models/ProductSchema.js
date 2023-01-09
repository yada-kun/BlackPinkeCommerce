import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter a product title"],
  },

  image: {
    type: String,
    required: [true, "Image required"],
  },

  price: {
    type: Number,
    required: [true, "Please input a price"],
  },

  description: {
    type: String,
    required: [true, "Please input a price"],
  },

  onSale: {
    type: Boolean,
    required: [true, "is it in sale or not?"],
  },
});

const Products = models.products || model("products", productSchema);

export default Products;
