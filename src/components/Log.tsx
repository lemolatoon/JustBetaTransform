import { Typography } from "@mui/material";
import { Panel } from "./common/Panel";

interface LogProps {
  log: string;
}

export function Log({ log }: LogProps) {
  return (
    <Panel>
      <Typography variant="subtitle1" fontWeight="bold">
        Transformation Log:
      </Typography>
      <Panel
        component="pre"
        sx={{
          whiteSpace: "pre-wrap",
          overflowX: "auto",
        }}
      >
        {log}
      </Panel>
    </Panel>
  );
}
