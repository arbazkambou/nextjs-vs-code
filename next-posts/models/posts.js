import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "every post must have a title"],
  },
  body: {
    type: String,
    required: [true, "every post must have a title"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A booking must a user"],
  },
});

const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);

export default Post;
