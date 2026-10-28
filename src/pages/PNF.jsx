
import React from 'react'
import assets from '../assets/PNF.gif'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

const PNF = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Page Not Found
      </Typography>

      <Box
        component="img"
        src={assets}
        alt="Page Not Found GIF"
        sx={{
          width: '100%',
          maxWidth: 400,
          height: 'auto'
        }}
      />

      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Oops! The page you are looking for does not exist.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          mt: 3,
          px: 4,
          py: 1.2,
          borderRadius: 2,
          textTransform: 'none'
        }}
      >
        Go to Home
      </Button>
    </Box>
  )
}

export default PNF
