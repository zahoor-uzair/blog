"use client";
import React from 'react'
import BlogCard from '../blog-card';

const TopBlogCards = () => {
  return (
    <div className="flex justify-between gap-4 py-4 w-full flex-row mt-10" >
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
  )
}

export default TopBlogCards
