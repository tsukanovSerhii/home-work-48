import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';

import Header from './components/Header';
import Form from './components/Form';
import ItemCard from './components/ItemCard';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#06b6d4', // Cyan
    },
    secondary: {
      main: '#8b5cf6', // Purple
    },
    background: {
      default: '#0f172a',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    h3: {
      fontWeight: 800,
      background: 'linear-gradient(to right, #06b6d4, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.5px',
    }
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          boxShadow: '0 4px 14px 0 rgba(6, 182, 212, 0.39)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(6, 182, 212, 0.5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
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
      <GlobalStyles styles={{
        body: {
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          minHeight: '100vh',
          backgroundAttachment: 'fixed',
        }
      }} />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <Box sx={{ flexGrow: 1, py: { xs: 6, md: 12 } }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ pb: 1 }}>
                Сучасні Веб Рішення
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 300, mt: 2 }}>
                Ми створюємо інноваційні цифрові продукти з приголомшливим дизайном та передовими технологіями.
              </Typography>
            </Box>

            <Grid container spacing={6}>
              <Grid item xs={12} md={7}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <ItemCard 
                      title="Креативний Дизайн" 
                      description="Неповторні інтерфейси, які захоплюють з першого погляду та залишають незабутнє враження."
                      image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ItemCard 
                      title="Швидка Розробка" 
                      description="Оптимізований код та сучасний стек технологій для максимальної продуктивності."
                      image="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80"
                    />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} md={5}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
