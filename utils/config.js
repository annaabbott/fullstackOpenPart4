import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3003;
const mongooseUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

export default {
  PORT,
  mongooseUrl,
};
