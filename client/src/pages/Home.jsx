import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import UserMenu from '../components/UserMenu'


export default function Home() {
  return (
    <>
      <Typography variant='h4' sx={{mb : '20px'}}> Note App</Typography>
      <Box sx ={{display:'flex', justifyContent : 'right' , mb:'10px' }}>
        <UserMenu/>

      </Box>
    </>
  )
}
