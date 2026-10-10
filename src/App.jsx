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
      main: '#06b6d4',
    },
    secondary: {
      main: '#8b5cf6',
    },
    background: {
      default: '#070b19',
      paper: 'rgba(255, 255, 255, 0.03)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    h1: {
      fontWeight: 800,
      background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    }
  },
  shape: {
    borderRadius: 20,
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        body: {
          background: 'radial-gradient(circle at 50% -20%, #1e1b4b 0%, #070b19 80%)',
          minHeight: '100vh',
          backgroundAttachment: 'fixed',
        }
      }} />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Header />
        
        <Box sx={{ flexGrow: 1, py: { xs: 8, md: 14 }, width: '100%' }}>
          <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: 12, maxWidth: 800 }}>
              <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.1 }}>
                Майбутнє Вже Тут
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mt: 3, mb: 5, lineHeight: 1.6 }}>
                Створюємо неперевершені цифрові рішення. Бездоганний дизайн, сучасні технології та абсолютна увага до деталей, які перетворюють ідеї на реальність.
              </Typography>
            </Box>

            {/* Cards Section */}
            <Box sx={{ width: '100%', mb: 12 }}>
              <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, color: '#fff' }}>
                Що ми пропонуємо
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={5}>
                  <ItemCard 
                    title="Креативний Дизайн" 
                    description="Неповторні інтерфейси, які захоплюють з першого погляду та залишають незабутнє враження."
                    image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <ItemCard 
                    title="Швидка Розробка" 
                    description="Оптимізований код та сучасний стек технологій для максимальної продуктивності."
                    image="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80"
                  />
                </Grid>
              </Grid>
            </Box>
            
            {/* Form Section */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '100%', maxWidth: 600 }}>
                <Form />
              </Box>
            </Box>

          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
