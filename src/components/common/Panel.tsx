import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Panel = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
})); 