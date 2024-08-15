"use server";

import { Suspense } from "react";
import { getProjectIssues } from "./api";
import { CreateMotionTaskButton } from "./CreateMotionTaskButton";
import { CreateMotionTaskIssueKey } from "./CreateMotionTaskIssueKey";

export const Issues = async () => {
  const issues = await getProjectIssues();

  return (
    <div className="grid grid-cols-1 gap-4 max-h-[calc(100dvh-200px)] overflow-y-scroll">
      <p>Issues</p>
      <CreateMotionTaskIssueKey />
      {issues?.issues?.map((issue) => (
        <div
          key={issue.id}
          className="grid grid-cols-[2fr,1fr] items-center justify-center gap-4 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] p-4"
        >
          <div className="text-left">
            <h2 className="font-bold">
              {issue.key}: {issue.fields.summary}
            </h2>
            <div className="grid grid-cols-2">
              <p>Status</p>
              <p>{issue.fields.status?.name}</p>
              <p>Assignee</p>
              <p>{issue.fields.assignee?.displayName}</p>
              <p>Reporter</p>
              <p>{issue.fields.reporter?.displayName}</p>
            </div>
          </div>
          <Suspense>
            <CreateMotionTaskButton issue={issue} />
          </Suspense>
        </div>
      ))}
      {/* Load more button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Load More
      </button>
    </div>
  );
};
