import e from "express";
import dotenv from "dotenv";
import cors from "cors"

import { connectDB } from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = e();
const PORT = process.env.PORT || 5001;

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(cors({
  origin : "http://localhost:5173"
}))
app.use(e.json());
app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} and Req URL is ${req}`);
//   next()
// })

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
