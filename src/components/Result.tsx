import React from "react";

interface ResultProps {
  parseResult: string;
  transformResult: string;
}

export function Result({ parseResult, transformResult }: ResultProps) {
  return (
    <div className="p-4">
      <h2 className="font-semibold">Parsed Expression:</h2>
      <div className="border p-2 mb-4">{parseResult}</div>
      <h2 className="font-semibold">Beta Transformed Expression:</h2>
      <div className="border p-2">{transformResult}</div>
    </div>
  );
}
