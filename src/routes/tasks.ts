import { Router, Request, Response, NextFunction } from "express";
import AppError from "../middlewares/errorHandler";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../modules/tasks-module";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(Number(id));

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, color, completed } = req.body;

    if (!title || !color) {
      throw new AppError("Title and color are required", 400);
    }

    const task = await createTask({ title, color, completed });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, color, completed } = req.body;

    const task = await updateTask(Number(id), { title, color, completed });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await deleteTask(Number(id));

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
});

export default router;