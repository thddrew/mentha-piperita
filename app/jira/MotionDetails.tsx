"use client";

import { Suspense, useActionState } from "react";
import { Projects } from "../motion/Projects";
import { Workspaces } from "../motion/Workspaces";

export default function MotionDetails() {
  const [state] = useActionState(() => null, null);

  console.log({ state });

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center gap-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Workspaces />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
    </div>
  );
}
