import prisma from "../prisma/prisma-client";


export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getTaskById = async (id: number) => {
    return await prisma.task.findUnique({
        where: {
            id,
        },
    });
};


export const createTask = async (data: { title: string; color: string; completed: boolean; }) => {
    return await prisma.task.create({
        data,
    });
};


export const updateTask = async (id: number, data: { title?: string; color?: string; completed?: boolean; }) => {
    return await prisma.task.update({
        where: {
            id,
        },
        data,
    });
};


export const deleteTask = async (id: number) => {
    return await prisma.task.delete({
        where: {
            id,
        },
    });
};

