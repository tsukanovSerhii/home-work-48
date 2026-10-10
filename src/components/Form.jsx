import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дякуємо, ${formData.name}! Ми зв'яжемося з вами за адресою ${formData.email}.`);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: { xs: 4, md: 5 },
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 4,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography variant="h5" component="h2" sx={{ color: '#f8fafc', mb: 1 }}>
          Готові розпочати?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Заповніть форму нижче, і наша команда зв'яжеться з вами найближчим часом.
        </Typography>
      </Box>
      
      <TextField 
        id="name" 
        name="name"
        label="Ваше ім'я" 
        variant="outlined" 
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
            '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.4)' },
          },
        }}
      />
      <TextField 
        id="email" 
        name="email"
        label="Ваш Email" 
        variant="outlined" 
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
            '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.4)' },
          },
        }}
      />
      <Button 
        variant="contained" 
        color="secondary" 
        type="submit" 
        size="large" 
        fullWidth
        sx={{ 
          mt: 2, 
          py: 1.5,
          background: 'linear-gradient(to right, #06b6d4, #8b5cf6)',
          boxShadow: '0 10px 20px -10px rgba(139, 92, 246, 0.7)',
          '&:hover': {
            boxShadow: '0 15px 25px -10px rgba(139, 92, 246, 0.9)',
          }
        }}
      >
        Відправити запит
      </Button>
    </Box>
  );
}
