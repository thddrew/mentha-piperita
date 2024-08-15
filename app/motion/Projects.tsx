import { useEffect, useState } from "react";
import { getMotionProjects } from "./api";
import { MotionProject } from "@/lib/types/motion";
import { parseAsString, useQueryState } from "nuqs";

export const Projects = () => {
  const [projects, setProjects] = useState<MotionProject[]>([]);
  const [project, setProject] = useQueryState("project", parseAsString);

  useEffect(() => {
    getMotionProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <p>Projects</p>
      {projects.map((proj) => (
        <div
          key={proj.id}
          className="grid grid-cols-2 items-center justify-center gap-4 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] p-4"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={proj.id === project}
              onChange={() => setProject(proj.id)}
            />
            <h2 className="text-xl text-left font-bold">{proj.name}</h2>
          </div>
          <p className="text-sm">{proj.id}</p>
        </div>
      ))}
    </div>
  );
};
