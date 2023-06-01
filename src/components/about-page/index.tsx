import React from 'react'
import ProfileCard from './profilecard'

const index = () => {
  return (
    <>
    <div className='flex justify-center items-center p-6 flex-wrap'>
        <ProfileCard profile={"Muhabat Khan Niazi"}/>
        <ProfileCard profile={"Uzair Khan Baloch"}/>
    </div>
    </>
  )
}

export default index