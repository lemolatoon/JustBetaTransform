import { useEffect, useState } from "react";
import init, {
  try_parse,
  beta_transform,
} from "../secd-wasm/pkg/secd_wasm";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { Result } from "./components/Result";
import { Log } from "./components/Log";

function App() {
  const [input, setInput] = useState("");
  const [parseResult, setParseResult] = useState("");
  const [transformResult, setTransformResult] = useState("");
  const [log, setLog] = useState("");
  const [activeTab, setActiveTab] = useState<"result" | "log">("result");

  useEffect(() => {
    init();
  }, []);

  async function handleParse() {
    try {
      const parsed = try_parse(input);
      setParseResult(parsed);
    } catch (e) {
      setParseResult(String(e));
    }
  }

  async function handleTransform() {
    try {
      const result = beta_transform(input);
      setTransformResult(result.expr());
      setLog(result.log());
    } catch (e) {
      setTransformResult("");
      setLog(String(e));
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Editor
          input={input}
          onChange={setInput}
          onParse={handleParse}
          onTransform={handleTransform}
        />
        <div className="w-1/2 p-4">
          <div className="mb-2">
            <button
              className={`px-3 py-1 mr-2 ${activeTab === "result" ? "bg-gray-300" : "bg-gray-100"}`}
              onClick={() => setActiveTab("result")}
            >
              Result
            </button>
            <button
              className={`px-3 py-1 ${activeTab === "log" ? "bg-gray-300" : "bg-gray-100"}`}
              onClick={() => setActiveTab("log")}
            >
              Log
            </button>
          </div>
          {activeTab === "result" && (
            <Result
              parseResult={parseResult}
              transformResult={transformResult}
            />
          )}
          {activeTab === "log" && <Log log={log} />}
        </div>
      </div>
    </div>
  );
}

export default App;
