import React, { useEffect, useState } from 'react';
import {
  CssBaseline,
  Box,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { Header } from './components';
import { DogsPage } from './pages';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <DogsPage />
      </Box>
    </ThemeProvider>
  );
}

export default App;
