import React from 'react'
import { Button } from '@mui/material'

export const MyButton = () => {
  return (
    <div>
        <Button variant="contained" color="primary">
            Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
            Secondary Button
        </Button>
        <Button variant="text" color="success">
            Success Button
        </Button>
      
    </div>
  )
}
