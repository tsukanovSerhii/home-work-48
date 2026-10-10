import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="sticky" 
        elevation={0} 
        sx={{ 
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: '1px' }}>
              <span style={{ color: '#06b6d4' }}>Neo</span>Space
            </Typography>
            <Button variant="outlined" color="primary" sx={{ 
              borderWidth: 2, 
              '&:hover': { borderWidth: 2 },
              boxShadow: 'none',
              borderRadius: 8
            }}>
              Увійти
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
