import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from "../modules/tasks-module";
import { Router } from "express";


const router = Router();

router.get("/", async (req, res) => {
    const tasks = await getAllTasks();
    res.json(tasks);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const task = await getTaskById(Number(id));
    res.json(task);
});

router.post("/", async (req, res) => {
    const { title, color, completed } = req.body;
    const task = await createTask({ title, color, completed });
    res.json(task);
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const task = await updateTask(Number(id), { title, color, completed });
    res.json(task);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const task = await deleteTask(Number(id));
    res.json(task);
});


export default router;