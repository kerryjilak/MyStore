import Box from '@mui/material/Box';
import React from 'react'
import { Routes } from 'react-router-dom'

export const MyBox = () => {
  return (
    <Box>
        <Routes>
        <Box sx={{width: 200, height:200, backgroundColor:'beige', color:'black', padding:2}}>
            I tried this one
        </Box>
        <Box sx={{ width: 300, height: 300, backgroundColor: 'primary.main', color: 'white', padding: 2 }}>
            This is a Box component with a primary background color.
        </Box>
        <Box sx={{ width: 300, height: 300, backgroundColor: 'secondary.main', color: 'white', padding: 2 }}>
            This is a Box component with a secondary background color.
        </Box>
        <Box sx={{ width: 300, height: 300, backgroundColor: 'error.main', color: 'white', padding: 2 }}>
            This is a Box component with an error background color.
        </Box>
        </Routes>
    </Box>
  )
}


