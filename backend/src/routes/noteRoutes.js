import e from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteById
} from "../controllers/noteController.js";

const router = e.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
