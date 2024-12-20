import React from "react";

interface LogProps {
  log: string;
}

export function Log({ log }: LogProps) {
  return (
    <div className="p-4">
      <h2 className="font-semibold">Transformation Log:</h2>
      <pre className="border p-2 whitespace-pre-wrap">{log}</pre>
    </div>
  );
}
