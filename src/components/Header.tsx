import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useTheme
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#fff', height: 65 }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 5, }}>
            ThunderBolt
          </Typography>

          <IconButton edge="start" color="inherit" aria-label="menu" sx={{
            mr: 2, width: '30px',
            height: '30px',
            borderRadius: '8px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
