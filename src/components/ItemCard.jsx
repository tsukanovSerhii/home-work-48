import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ItemCard({ title, description, image }) {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(6, 182, 212, 0.5)'
        }
      }}
    >
      <Box sx={{ p: 1.5 }}>
        <CardMedia
          sx={{ height: 200, borderRadius: 3 }}
          image={image}
          title={title}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, px: 3, pt: 2 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f8fafc' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 3 }}>
        <Button size="small" sx={{ 
          background: 'rgba(6, 182, 212, 0.1)', 
          color: '#06b6d4', 
          boxShadow: 'none',
          '&:hover': { background: 'rgba(6, 182, 212, 0.2)', transform: 'none', boxShadow: 'none' } 
        }}>
          Дізнатись більше
        </Button>
      </CardActions>
    </Card>
  );
}
