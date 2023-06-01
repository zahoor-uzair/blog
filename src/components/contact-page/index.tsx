"use client"
import React from 'react'
import ContactForm from './contact-form'
import ContactInfo from './contact-info'

const index = () => {
  return (
    <div className="w-full flex p-10">
        <ContactForm />
        <ContactInfo />
    </div>
  )
}

export default index