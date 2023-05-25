"use client";
import React from 'react'
import PostCard from '../card';

const Headcards = () => {
  return (
    <>
    <div className="flex justify-between gap-4 py-4 w-full flex-row mt-10" >
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
    </>
  )
}

export default Headcards
