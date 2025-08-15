import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import records from "./routes/record.js";
import "./db/connection.js"; // Ensure DB connects when server starts

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
