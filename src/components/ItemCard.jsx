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
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        }
      }}
    >
      <Box sx={{ p: 1 }}>
        <CardMedia
          sx={{ height: 220, filter: 'grayscale(30%)' }}
          image={image}
          title={title}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, px: 2, pt: 2, pb: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 400, letterSpacing: '-0.01em' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button size="small" color="inherit" sx={{ borderBottom: '1px solid #111', minWidth: 0, p: 0 }}>
          Деталі
        </Button>
      </CardActions>
    </Card>
  );
}
