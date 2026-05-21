"use client";

import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <PulseLoader size={12} />
      <p className="text-lg font-medium">Loading...</p>
    </div>
  );
}