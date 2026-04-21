import React from 'react'
import { Rating } from '@mui/material'
function Home() {
  return (
    <>
    <h1 className='text-3xl text-blue-400'>
      This is our home page
    </h1>
    <Rating name="size-large" defaultValue={2} size="large" />
    
    </>
  )
}

export default Home