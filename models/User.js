import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pass: { type: String, required: true },
    phone: { unique: true, type: String, required: true },
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.models.users || mongoose.model("users", UserSchema);
