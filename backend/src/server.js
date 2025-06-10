import e from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config()

const app = e();
const PORT = process.env.PORT || 5001
connectDB()

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
