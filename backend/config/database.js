import mongoose from "mongoose";

async function connectDatabase() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI belum ditambahkan ke file .env");
  }

  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 10000,
  });

  console.log(
    `MongoDB terhubung: ${mongoose.connection.host}/${mongoose.connection.name}`,
  );

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB error:", error.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB terputus");
  });
}

export default connectDatabase;