import mongoose from "mongoose";
import config from "./utils/config.js";
import logger from "./utils/logger.js";
import app from "./app.js";

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
