"use client";

import { Suspense, useActionState } from "react";
import { createLinearTasksAction } from "./api";
import MotionDetails from "../motion/MotionDetails";

export default function Page() {
  const [, formAction] = useActionState(createLinearTasksAction, null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-8">
      <h1 className="text-6xl font-bold">Linear</h1>
      <div className="grid grid-cols-2 gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          <MotionDetails />
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
    </div>
  );
}
