import { useEffect, useState } from "react";
import { getMotionProjects } from "./api";
import { MotionProject } from "@/lib/types/motion";

export const Projects = () => {
  const [projects, setProjects] = useState<MotionProject[]>([]);

  useEffect(() => {
    getMotionProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <p>Projects</p>
      {projects.map((project) => (
        <div
          key={project.id}
          className="grid grid-cols-2 items-center justify-center gap-4 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] p-4"
        >
          <h2 className="text-xl text-left font-bold">{project.name}</h2>
          <p className="text-sm">{project.id}</p>
        </div>
      ))}
    </div>
  );
};
