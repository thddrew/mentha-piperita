"use client";

import { Issue } from "@/lib/types/jira";
import { parseAsString, useQueryStates } from "nuqs";
import { convertJiraIssueToMotionTask } from "./api";
import { useState } from "react";
import { createTask } from "../motion/api";
import { toast } from "sonner";

export const CreateMotionTaskButton = ({ issue }: { issue: Issue }) => {
  const [loading, setLoading] = useState(false);

  const [query] = useQueryStates({
    project: parseAsString,
    workspace: parseAsString,
  });

  // TODO: move to server
  const onCreate = async () => {
    setLoading(true);

    try {
      if (!query.project || !query.workspace) {
        alert("Please select a project and workspace");
        return;
      }

      const motionTask = await convertJiraIssueToMotionTask(
        issue,
        query.project,
        query.workspace
      );

      await createTask(motionTask);
      toast.success(`Task created: ${motionTask.name}`);
    } catch (err) {
      console.log(err);
      toast.error(`Error creating task: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={!query.project || !query.workspace || loading}
      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onCreate}
    >
      Create Task
    </button>
  );
};
