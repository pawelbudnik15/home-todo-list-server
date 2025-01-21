import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask, getTaskById } from "../controllers/taskController";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
