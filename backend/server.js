import "dotenv/config";

import path from "node:path";
import { fileURLToPath } from "node:url";

import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";

import connectDatabase from "./config/database.js";
import pageRoutes from "./routes/pageRoutes.js";

const app = express();
const port = Number(process.env.PORT) || 5000;

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const imageDirectory = path.join(dirname, "public", "images");

app.disable("x-powered-by");

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  }),
);

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);

app.use(
  express.json({
    limit: "1mb",
  }),
);

app.use(
  "/images",
  express.static(imageDirectory, {
    etag: true,
    lastModified: true,
    maxAge: process.env.IMAGE_CACHE_MAX_AGE || "1d",
  }),
);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Epostika API berjalan",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

app.use("/api/pages", pageRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint tidak ditemukan",
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Terjadi kesalahan pada server",
    stack:
      process.env.NODE_ENV === "development"
        ? error.stack
        : undefined,
  });
});

async function startServer() {
  try {
    await connectDatabase();

    app.listen(port, () => {
      console.log(`Backend berjalan: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Backend gagal dijalankan:", error.message);
    process.exit(1);
  }
}

startServer();