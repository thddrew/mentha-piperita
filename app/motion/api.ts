"use server";

import {
  MotionProjectResponse,
  MotionTask,
  MotionWorkspaceResponse,
} from "@/lib/types/motion";

const BASE = "https://api.usemotion.com/v1";

export const getMotionWorkspaces = async () => {
  const response = await fetch(`${BASE}/workspaces`, {
    headers: {
      Accept: "application/json",
      "X-API-Key": `${process.env.MOTION_API_KEY}`,
    },
  });
  const data = (await response.json()) as MotionWorkspaceResponse;

  return data.workspaces;
};

export const getMotionProjects = async () => {
  const response = await fetch(
    `${BASE}/projects?workspaceId=ujbHmIO7zQG5UGQJB2GuX`,
    {
      headers: {
        Accept: "application/json",
        "X-API-Key": `${process.env.MOTION_API_KEY}`,
      },
    }
  );
  const data = (await response.json()) as MotionProjectResponse;

  return data.projects;
};

export const createProject = async (projectName: string) => {
  const response = await fetch(`${BASE}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": `${process.env.MOTION_API_KEY}`,
    },
    body: JSON.stringify({
      name: projectName,
      workspaceId: "ujbHmIO7zQG5UGQJB2GuX",
    }),
  });

  return response.json();
};

export const createTask = async (task: MotionTask) => {
  const response = await fetch(`${BASE}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": `${process.env.MOTION_API_KEY}`,
    },
    body: JSON.stringify(task),
  });

  return response.json();
};

export const createTasks = async (tasks: MotionTask[]) => {
  const taskPromises = [];
  for (const task of tasks) {
    taskPromises.push(createTask(task));
  }

  const responses = await Promise.allSettled(taskPromises);

  return responses;
};
