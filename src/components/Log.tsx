import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface LogProps {
  log: string;
}

export function Log({ log }: LogProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold">
        Transformation Log:
      </Typography>
      <Box
        component="pre"
        sx={{
          border: 1,
          p: 1,
          whiteSpace: "pre-wrap",
          overflowX: "auto",
        }}
      >
        {log}
      </Box>
    </Box>
  );
}
