import express from "express";
import mongoose from "mongoose";
import config from "./utils/config.js";
import logger from "./utils/logger.js";
import blogsRouter from "./controllers/blogs.js";
import middleware from "./utils/middleware.js";

const app = express();
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});
const PORT = config.PORT;
const mongooseUrl = config.mongooseUrl;

const connectDB = async () => {
  try {
    await mongoose.connect(mongooseUrl, { family: 4 });
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Error connecting to MongoDB:", error.message);
  }
};

connectDB();
app.use(express.static("dist"));
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/blogs", blogsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
