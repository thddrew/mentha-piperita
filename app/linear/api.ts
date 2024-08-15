import { LinearTask } from "@/lib/types/linear";
import { MotionTask } from "@/lib/types/motion";
import papa from "papaparse";
import { createProject, createTasks, getMotionProjects } from "../motion/api";

export const createLinearTasksAction = async (
  state: MotionTask[] | null,
  formData: FormData
) => {
  const data = await parseLinearData(formData);

  const uniqueProjects = [...new Set(data.map((task) => task.Project))];
  const existingProjects = await getMotionProjects();
  const missingProjects = uniqueProjects.filter(
    (project) => !existingProjects.find((p) => p.name === project)
  );

  if (missingProjects.length > 0) {
    for (const project of missingProjects) {
      const res = await createProject(project);
      console.log("Created", res);
    }
  }

  console.log({
    linearTasks: data,
  });

  const motionTasks = await convertLinearToMotion(data);

  await createTasks(motionTasks);

  return motionTasks;
};

/**
 * Take comma separated string and parse it into an array of objects for Motion API
 */
export const parseLinearData = (formData: FormData) => {
  const { promise, resolve, reject } = Promise.withResolvers<LinearTask[]>();
  if (!formData.get("file")) reject("No file selected");

  papa.parse<LinearTask>(formData.get("file") as File, {
    header: true,
    complete: (results) => {
      resolve(results.data);
    },
    error: (error) => {
      reject(error);
    },
  });

  return promise;
};

export const convertLinearToMotion = async (tasks: LinearTask[]) => {
  const motionTasks: MotionTask[] = [];

  const projects = await getMotionProjects();
  const projectsMap = new Map(
    projects.map((project) => [project.name, project])
  );

  for (const task of tasks) {
    const projectId = projectsMap.get(task.Project)?.id;

    motionTasks.push({
      name: task.Title,
      description: task.Description ?? undefined,
      projectId,
      workspaceId: "ujbHmIO7zQG5UGQJB2GuX",
    });
  }

  return motionTasks;
};
