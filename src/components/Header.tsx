import { useState, useEffect } from "react";
import init, { try_parse } from "../../secd-wasm/pkg/secd_wasm";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from '@mui/icons-material/GitHub';

const lambda_expressions = [
  "\\x.x",
  "\\x.\\y.y",
  "((\\x.x) a)",
  "((\\x.\\y.x) a)",
  "((\\x.\\y.y) a)",
  "((\\x.x) ((\\y.y) b))",
  "((\\x.x) ((\\z.z z) (\\w.w)))",
  "((\\x.(x a)) (\\y.y))",
  "(((\\x.\\y.x) (\\u.u)) v)",
  "((\\x.(\\y.(y x))) a)",
  "(((\\x.x) (\\y.(y y))) (\\z.z))",
  "((\\x.(\\y.y)) (\\x.x))",
  "((\\x.(x (\\z.z))) (\\y.y))",
  "((\\n.\\f.\\x.(n f) (f x)) (\\f.\\x.f (f x)))",
];

interface HeaderProps {
  onSelectLambda: (expr: string) => void;
}

export function Header({ onSelectLambda }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [parsedList, setParsedList] = useState<string[]>([]);

  useEffect(() => {
    init().then(() => {
      const newParsedList = lambda_expressions.map((expr) => {
        try {
          return try_parse(expr);
        } catch (e) {
          return "Error parsing expression";
        }
      });
      setParsedList(newParsedList);
    });
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Lambda Editor: Just Beta Reduction
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mr: 1 }}>
            <IconButton
              color="inherit"
              href="https://github.com/lemolatoon/SECDMachine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/lemolatoon/JustBetaReduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <ListItem>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Preset
            </Typography>
          </ListItem>
          {parsedList.map((parsedExpr, index) => (
            <ListItem key={index} disablePadding sx={{ px: 2 }}>
              <ListItemButton
                onClick={() => {
                  // Use original expression as input when selected
                  onSelectLambda(lambda_expressions[index]);
                  setDrawerOpen(false);
                }}
                sx={{
                  border: 1,
                  borderColor: "grey.300",
                  borderRadius: 2,
                  my: 1,
                }}
              >
                <ListItemText primary={parsedExpr} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
