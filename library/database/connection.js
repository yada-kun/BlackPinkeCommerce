import mongoose from "mongoose";

const ConnectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.NEXT_PUBLIC_DB_URL
    );
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default ConnectDatabase;
