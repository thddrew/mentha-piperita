import { useEffect, useState } from "react";
import { getMotionWorkspaces } from "./api";
import { MotionWorkspace } from "@/lib/types/motion";

export const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState<MotionWorkspace[]>([]);
  useEffect(() => {
    getMotionWorkspaces().then((workspaces) => {
      setWorkspaces(workspaces);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <p>Workspaces</p>
      {workspaces.map((workspace) => (
        <div
          key={workspace.id}
          className="grid grid-cols-2 items-center gap-4 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] p-4"
        >
          <h2 className="text-xl text-left font-bold">{workspace.name}</h2>
          <p className="text-sm">{workspace.id}</p>
        </div>
      ))}
    </div>
  );
};
