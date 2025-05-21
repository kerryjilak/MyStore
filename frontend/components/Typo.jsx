import React from 'react'
import {Typography} from '@mui/material'
export const Typo = () => {
  return (
    <div>
        <Typography variant="h1" component="h2" gutterBottom>
            h1. Heading
        </Typography>
        <Typography variant="h2" component="h3" gutterBottom>
            h2. Heading
        </Typography>
        <Typography variant="h3" component="h4" gutterBottom>
            h3. Heading
        </Typography>
        <Typography variant="h4" component="h5" gutterBottom>
            h4. Heading
        </Typography>
        <Typography variant="h5" component="h6" gutterBottom>
            h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
            h6. Heading
        </Typography>
      
    </div>
  )
}

