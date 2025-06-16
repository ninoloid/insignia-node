import { Server } from "./bin/server";
import "dotenv/config";
import mongoose from "mongoose";

const MONGO_USER = process.env.MONGO_USER!;
const MONGO_PASS = process.env.MONGO_PASS!;
const MONGO_HOST = process.env.MONGO_HOST!;
const MONGO_PORT = process.env.MONGO_PORT!;
const MONGO_DB = process.env.MONGO_DB!;

const uri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const server = new Server();
server.listen();
