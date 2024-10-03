import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"], // Name is required
      trim: true, // Trims whitespace
    },
    quantity: {
      type: Number,
      required: true, // Quantity is required
      min: [0, "Quantity cannot be less than 0"],
    },
    price: {
      type: Number,
      required: true, // Price is required
      min: [0, "Price must be greater than or equal to 0"],
    },
    image: {
      type: String, // URL or image path
      required: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

// Create and export the Product model
const Product = mongoose.model("Product", productSchema);
export default Product;
