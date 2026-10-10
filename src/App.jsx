import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from './components/Header';
import Form from './components/Form';
import ItemCard from './components/ItemCard';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#757575',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#111111',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    h3: {
      fontWeight: 300,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    }
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #eaeaea',
        },
      },
    },
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <Box sx={{ flexGrow: 1, py: 10 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 2 }}>
              Створюємо майбутнє.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 10, maxWidth: 600 }}>
              Мінімалістичний підхід до вирішення складних задач. Наші послуги створені для того, щоб ваш бізнес виглядав бездоганно.
            </Typography>

            <Grid container spacing={6}>
              <Grid item xs={12} md={7}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <ItemCard 
                      title="Веб-розробка" 
                      description="Чистий код, швидка робота та надійність на кожному етапі створення."
                      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ItemCard 
                      title="Дизайн" 
                      description="Фокус на контенті та простоті. Мінімум шуму, максимум результату."
                      image="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} md={5}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', mt: { xs: 4, md: 0 } }}>
                  <Form />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
