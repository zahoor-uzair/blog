import { Typography } from '@mui/material'
import React from 'react'

const stl={
    marginTop: '5px'
}
const ContactInfo = () => {
  return (
    <>
    <div className="w-[50%] bg-blue-950/90  text-white px-10 rounded-r-lg shadow-lg">
          <div className='mt-24'>
          <Typography
            variant="h5"
            className="mb-10 font-bold"
          >Contact Info</Typography>
            <Typography variant='h6' sx={stl}>abcde12345@gmail.com</Typography>
            <Typography variant='h6' sx={stl}>0312231239</Typography>
            <Typography variant='h6' sx={stl}>0312231239</Typography>
          </div>
    </div>
    </>
  )
}

export default ContactInfo