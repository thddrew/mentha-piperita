"use client";

import { Suspense } from "react";
import { Projects } from "./Projects";
import { Workspaces } from "./Workspaces";

export default function MotionDetails() {
  return (
    <div className="space-y-3">
      <Suspense fallback={<div>Loading...</div>}>
        <Workspaces />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
    </div>
  );
}
