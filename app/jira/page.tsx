import { Suspense } from "react";
import { Issues } from "./Issues";
import MotionDetails from "./MotionDetails";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-8">
      <h1 className="text-6xl font-bold">Jira</h1>
      <div className="grid grid-cols-2 gap-2">
        <Suspense fallback={<div>Loading...</div>}>
          <MotionDetails />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Issues />
        </Suspense>
      </div>
    </div>
  );
}
