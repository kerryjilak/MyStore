import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Link
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const MyNavbar = ({ mode, setMode }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: mode === 'dark' ? '#0a0d36' : '#ffffff',
        color: 'text.primary',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <Typography
          variant="h5"
          sx={{
            background: 'linear-gradient(25deg, rgb(76, 99, 229) 10%, #FF8E53 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          <Link href="/" underline="none" color="inherit">
            MyStore 🛒
          </Link>
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="/create">
            <Button variant="outlined" color="primary" sx={{ minWidth: 40, height: 35 }}>
              <AddIcon />
            </Button>
          </Link>

          {/* This button toggles theme app-wide via App.jsx props */}
          <Button
            variant="outlined"
            color="primary"
            sx={{ minWidth: 40, height: 35 }}
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          >
            {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
