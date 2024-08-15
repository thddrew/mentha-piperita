"use client";

import { Suspense, useActionState } from "react";
import { createLinearTasksAction } from "./api";
import { Projects } from "../motion/Projects";
import { Workspaces } from "../motion/Workspaces";

export default function Page() {
  const [state, formAction] = useActionState(createLinearTasksAction, null);

  console.log({ state });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-8">
      <h1 className="text-6xl font-bold">Linear</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Workspaces />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <form action={formAction}>
        <input
          type="file"
          name="file"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Import
        </button>
      </form>
    </div>
  );
}
