import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Header() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', pt: 3 }}>
      <AppBar 
        position="static" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 50,
          width: { xs: '90%', md: '800px' },
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 800, letterSpacing: '1px', color: '#fff' }}>
            <span style={{ color: '#06b6d4' }}>Neo</span>Space
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button sx={{ color: '#cbd5e1', '&:hover': { color: '#fff' } }}>Про нас</Button>
            <Button sx={{ color: '#cbd5e1', '&:hover': { color: '#fff' } }}>Послуги</Button>
            <Button variant="contained" sx={{ 
              borderRadius: 50, 
              background: 'linear-gradient(to right, #06b6d4, #8b5cf6)',
              color: '#fff',
              boxShadow: 'none',
              px: 3,
            }}>
              Увійти
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
