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
    alert(`Ім'я: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        p: { xs: 3, md: 5 },
        bgcolor: '#fafafa',
        border: '1px solid #eaeaea',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 400, letterSpacing: '-0.01em', mb: 1 }}>
          Давайте почнемо
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Залиште заявку і ми обговоримо ваш проект.
        </Typography>
      </Box>
      
      <TextField 
        id="name" 
        name="name"
        label="Ім'я" 
        variant="standard" 
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        sx={{ '& .MuiInput-underline:after': { borderBottomColor: '#111' } }}
      />
      <TextField 
        id="email" 
        name="email"
        label="Email" 
        variant="standard" 
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        sx={{ '& .MuiInput-underline:after': { borderBottomColor: '#111' } }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        type="submit" 
        size="large" 
        fullWidth
        disableElevation
        sx={{ mt: 2, py: 1.5, bgcolor: '#111', '&:hover': { bgcolor: '#333' } }}
      >
        Відправити
      </Button>
    </Box>
  );
}
