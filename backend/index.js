import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./utils/db.js"

dotenv.config()

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
