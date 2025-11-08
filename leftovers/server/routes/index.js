import express from "express";
import {
  getMoods,
  createMood,
  getMoodById,
  updateMood,
  deleteMood,
} from "../controllers/moodController.js";
import { getKoreanDramas } from "../controllers/kDramaController.js";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Define routes
router.get("/moods", getMoods);
router.post("/moods", createMood);
router.get("/moods/:id", getMoodById);
router.put("/moods/:id", updateMood);
router.delete("/moods/:id", deleteMood);

export default router;
