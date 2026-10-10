import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ItemCard({ title, description, image }) {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: 5,
        transition: 'all 0.4s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }
      }}
    >
      <Box sx={{ p: 2, width: '100%' }}>
        <CardMedia
          sx={{ height: 240, borderRadius: 4 }}
          image={image}
          title={title}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, px: 4, pt: 2, pb: 4 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff', fontWeight: 600, mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
