import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box
  component="footer"
  sx={{py: 3,px: 2,backgroundColor: '#aac0d5ff',
  }}
>
  <Box
    sx={{
      
      maxWidth: '600px',
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button 
          component={Link} 
          to="/about" 
          variant="text" 
          sx={{ mb: 4, color: '#2D2D2D' }}
        >
          About
        </Button>
        <Typography variant="body2" color="text.secondary">
          © 2025 Tech Hub
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;