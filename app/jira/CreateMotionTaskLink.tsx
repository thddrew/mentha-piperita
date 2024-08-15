"use client";

import { useActionState, useEffect } from "react";
import { createJiraIssueLinkFormAction } from "./api";
import { useQueryStates, parseAsString } from "nuqs";
import { toast } from "sonner";

export const CreateMotionTaskLink = () => {
  const [query] = useQueryStates({
    project: parseAsString,
    workspace: parseAsString,
  });
  const [state, formAction] = useActionState(
    createJiraIssueLinkFormAction,
    null
  );

  useEffect(() => {
    if (state) {
      toast.success(`Task created: ${state.name}`);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex items-center gap-2"
    >
      <input
        className="bg-transparent border rounded-md border-solid border-black/[.08] dark:border-white/[.145] outline-none p-2 w-full"
        type="text"
        name="issueKey"
        placeholder="URL"
      />
      <input
        type="hidden"
        name="project"
        value={query.project ?? ""}
      />
      <input
        type="hidden"
        name="workspace"
        value={query.workspace ?? ""}
      />
      <button
        type="submit"
        className="bg-blue-500 whitespace-nowrap hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Task
      </button>
    </form>
  );
};
