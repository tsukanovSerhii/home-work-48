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
        alignItems: 'center',
        gap: 4,
        p: { xs: 4, md: 6 },
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: 4,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" component="h2" sx={{ color: '#ffffff', mb: 2, fontWeight: 700 }}>
          Готові розпочати?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
          Залиште свої контакти і наша команда зв'яжеться з вами найближчим часом.
        </Typography>
      </Box>
      
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
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
              borderRadius: 3,
              background: 'rgba(0,0,0,0.2)',
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&.Mui-focused fieldset': { borderColor: '#06b6d4' },
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
              borderRadius: 3,
              background: 'rgba(0,0,0,0.2)',
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&.Mui-focused fieldset': { borderColor: '#06b6d4' },
            },
          }}
        />
      </Box>
      
      <Button 
        variant="contained" 
        type="submit" 
        size="large" 
        sx={{ 
          mt: 2, 
          py: 2,
          px: 6,
          borderRadius: 50,
          background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
          boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.5)',
          '&:hover': {
            boxShadow: '0 15px 40px -10px rgba(6, 182, 212, 0.8)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Відправити запит
      </Button>
    </Box>
  );
}
