import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

import dns from "node:dns";
dns.setServers(["1.1.1.1","8.8.8.8"]);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//app.use(
  //cors({
    //origin: "http://localhost:5173",
  //})
//);

app.use(express.json());

app.use("/tasks", taskRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/tasks`);
  });
});
