import React from 'react'
import ProfileCard from './profilecard'

const ProfileSection = () => {
  return (
    <>
    <div className='flex justify-center items-center p-6 flex-wrap'>
        <ProfileCard />
        <ProfileCard />
    </div>
    </>
  )
}

export default ProfileSection