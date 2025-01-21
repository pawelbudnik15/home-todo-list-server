import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await prisma.task.findUnique({ where: { id: parseInt(id) } });
  res.json(task);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, color } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: { title, color },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
