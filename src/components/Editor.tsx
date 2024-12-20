import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

interface EditorProps {
  input: string;
  onChange: (value: string) => void;
}

export function Editor({ input, onChange }: EditorProps) {
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <TextField
        label="Enter Lambda Expression"
        multiline
        fullWidth
        rows={8}
        value={input}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
}
