import e from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";

const app = e();

connectDB()

app.use("/api/notes", noteRoutes);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
