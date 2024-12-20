import React from "react";

interface EditorProps {
  input: string;
  onChange: (value: string) => void;
  onParse: () => void;
  onTransform: () => void;
}

export function Editor({ input, onChange, onParse, onTransform }: EditorProps) {
  return (
    <div className="flex flex-col w-1/2 p-4">
      <textarea
        className="border p-2 w-full h-40"
        value={input}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="mt-2 flex gap-2">
        <button className="bg-green-500 px-3 py-1 text-white" onClick={onParse}>
          Parse
        </button>
        <button
          className="bg-blue-500 px-3 py-1 text-white"
          onClick={onTransform}
        >
          Beta Transform
        </button>
      </div>
    </div>
  );
}
