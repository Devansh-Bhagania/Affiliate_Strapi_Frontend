"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const { category } = useParams()
    console.log(category)
  return (
    <div>
        <h1>Category Page</h1>
            <h1>{category}</h1>
            
    </div>
  )
}

export default Page