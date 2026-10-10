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
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #eaeaea' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500, letterSpacing: '-0.02em', color: '#111' }}>
              studio.
            </Typography>
            <Button color="inherit" sx={{ fontWeight: 400 }}>Зв'язок</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
