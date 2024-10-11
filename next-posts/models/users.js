import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "every user must have email"],
  },
  name: {
    type: String,
    required: [true, "every user must have name"],
  },
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
