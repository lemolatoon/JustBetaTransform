import { useEffect, useRef, useState } from "react";
import init, { try_parse, beta_transform } from "../secd-wasm/pkg/secd_wasm";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { Result } from "./components/Result";
import { Log } from "./components/Log";
import { useMediaQuery, Box, Button, Stack } from "@mui/material";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [input, setInput] = useState("(\\x.x) a");
  const [parseResult, setParseResult] = useState("");
  const [transformResult, setTransformResult] = useState("");
  const [log, setLog] = useState("");
  const [activeTab, setActiveTab] = useState<"result" | "log">("result");

  const parseTimer = useRef<number | null>(null);

  useEffect(() => {
    init();
  }, []);

  // Automatically parse/transform after user stops typing
  useEffect(() => {
    if (parseTimer.current) {
      clearTimeout(parseTimer.current);
    }
    parseTimer.current = window.setTimeout(() => {
      handleParse();
      handleTransform();
    }, 500);
    return () => {
      if (parseTimer.current) {
        clearTimeout(parseTimer.current);
      }
    };
  }, [input]);

  function handleParse() {
    try {
      const parsed = try_parse(input);
      setParseResult(parsed);
    } catch (e) {
      setParseResult(String(e));
    }
  }

  function handleTransform() {
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
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header onSelectLambda={(expr) => setInput(expr)} />
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        sx={{ flex: 1, overflow: "hidden" }}
      >
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <Editor input={input} onChange={setInput} />
        </Box>
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              sx={{ mr: 1 }}
              disabled={activeTab === "result"}
              onClick={() => setActiveTab("result")}
            >
              Result
            </Button>
            <Button
              variant="contained"
              disabled={activeTab === "log"}
              onClick={() => setActiveTab("log")}
            >
              Log
            </Button>
          </Box>
          {activeTab === "result" && (
            <Result
              parseResult={parseResult}
              transformResult={transformResult}
            />
          )}
          {activeTab === "log" && <Log log={log} />}
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
