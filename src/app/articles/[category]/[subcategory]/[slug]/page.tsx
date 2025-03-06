"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { category, subcategory, slug } = useParams()
    console.log(category, subcategory, slug)
  return (
    <div>
        <h1>Article Page</h1>
            <h1>{category}</h1>
            <h1>{subcategory}</h1>
            <h1>{slug}</h1>
    </div>
  )
}

export default page