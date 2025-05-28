import e from "express";
import noteRoutes from "./routes/noteRoutes.js";

const app = e();
app.use("/api/notes", noteRoutes);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
