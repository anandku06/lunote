import e from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = e();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
if (process.env.NODE_ENV !== "production") {
}
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(e.json());
app.use(rateLimiter);

app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(e.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
