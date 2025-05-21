import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

import { MyNavbar} from '../components/MyNavbar.jsx';
import { HomePage } from '../pages/HomePage.jsx';
import { CreatePage } from '../pages/CreatePage.jsx'



function App() {
  const [mode, setMode] = useState('light'); // Global mode state

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#0a0d36' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyNavbar mode={mode} setMode={setMode} />

      {/* App Content */}
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
          pt: '64px', // Padding top to offset fixed navbar height
          px: 2,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
