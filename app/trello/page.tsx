import { Suspense } from "react";
import MotionDetails from "../motion/MotionDetails";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-8">
      <h1 className="text-6xl font-bold">Trello</h1>
      <div className="grid grid-cols-2 gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          <MotionDetails />
        </Suspense>
      </div>
    </div>
  );
}
