"use client";
import React from 'react'
import PostCard from './card';

// import BlogCard from './card2'

const Headcards = () => {
  return (
    <>
    <div className="flex justify-evenly bg-gray-200 flex-wrap py-2 my-4" >
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
    </>
  )
}

export default Headcards
