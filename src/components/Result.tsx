import { Typography } from "@mui/material";
import { Panel } from "./common/Panel";

interface ResultProps {
  parseResult: string;
  transformResult: string;
}

export function Result({ parseResult, transformResult }: ResultProps) {
  return (
    <Panel>
      <Typography variant="subtitle1" fontWeight="bold">
        Parsed Expression:
      </Typography>
      <Panel sx={{ mb: 2 }}>{parseResult}</Panel>
      <Typography variant="subtitle1" fontWeight="bold">
        Beta Reduced Expression:
      </Typography>
      <Panel>{transformResult}</Panel>
    </Panel>
  );
}
