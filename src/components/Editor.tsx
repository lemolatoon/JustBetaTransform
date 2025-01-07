import TextField from "@mui/material/TextField";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

interface EditorProps {
  input: string;
  onChange: (value: string) => void;
}

export function Editor({ input, onChange }: EditorProps) {
  const churchNumerals = [
    { label: "0", expr: "(\\f.\\x.x)" },
    { label: "1", expr: "(\\f.\\x.f x)" },
    { label: "2", expr: "(\\f.\\x.f (f x))" },
    { label: "3", expr: "(\\f.\\x.f (f (f x)))" },
  ];

  const operations = [
    { label: "succ", expr: "(\\n.\\f.\\x.f (n f x))" },
    { label: "pred", expr: "(\\n.\\f.\\x.n (\\g.\\h.h (g f)) (\\u.x) (\\u.u))" },
    { label: "add", expr: "(\\m.\\n.\\f.\\x.m f (n f x))" },
    { label: "mult", expr: "(\\m.\\n.\\f.m (n f))" },
  ];

  const insertAtCursor = (expr: string) => {
    onChange(input + " " + expr);
  };

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
      
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Church Numerals:
        </Typography>
        <ButtonGroup size="small" sx={{ mb: 2 }}>
          {churchNumerals.map((num) => (
            <Button
              key={num.label}
              onClick={() => insertAtCursor(num.expr)}
            >
              {num.label}
            </Button>
          ))}
        </ButtonGroup>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Operations:
        </Typography>
        <ButtonGroup size="small">
          {operations.map((op) => (
            <Button
              key={op.label}
              onClick={() => insertAtCursor(op.expr)}
            >
              {op.label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
}
