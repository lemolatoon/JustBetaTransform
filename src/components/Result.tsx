import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ResultProps {
  parseResult: string;
  transformResult: string;
}

export function Result({ parseResult, transformResult }: ResultProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold">
        Parsed Expression:
      </Typography>
      <Box sx={{ border: 1, p: 1, mb: 2 }}>{parseResult}</Box>
      <Typography variant="subtitle1" fontWeight="bold">
        Beta Reduced Expression:
      </Typography>
      <Box sx={{ border: 1, p: 1 }}>{transformResult}</Box>
    </Box>
  );
}
