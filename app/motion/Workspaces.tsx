import { useEffect, useState } from "react";
import { getMotionWorkspaces } from "./api";
import { MotionWorkspace } from "@/lib/types/motion";
import { parseAsString, useQueryState } from "nuqs";

export const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState<MotionWorkspace[]>([]);
  const [workspace, setWorkspace] = useQueryState("workspace", parseAsString);
  useEffect(() => {
    getMotionWorkspaces().then((workspaces) => {
      setWorkspaces(workspaces);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <p>Workspaces</p>
      {workspaces.map((ws) => (
        <div
          key={ws.id}
          className="grid grid-cols-2 items-center gap-4 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] p-4"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={ws.id === workspace}
              onChange={() => setWorkspace(ws.id)}
            />
            <h2 className="text-xl text-left font-bold">{ws.name}</h2>
          </div>
          <p className="text-sm">{ws.id}</p>
        </div>
      ))}
    </div>
  );
};
