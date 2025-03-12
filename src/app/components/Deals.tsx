import Image from 'next/image'
import React from 'react'

import product1 from '../../../public/product1.webp'
import product2 from '../../../public/product2.webp'
import product3 from '../../../public/product3.webp'
import product4 from '../../../public/product4.webp'
import { useRouter } from 'next/navigation'
const Deals = (props:any) => {
    const router = useRouter()
  return (
    <div
    onClick={
        ()=>{
         router.push(`https://www.amazon.in/gp/new-releases/?ref_=nav_em_cs_newreleases_0_1_1_3`)

    }
}
    className='w-[100%]  py-2 border-b-2 border-gray-200'>
        <div className='flex text-sm flex-row gap-2 justify-start items-center'>
            <p className='font-[500]'>
                {props.date}
            </p>
            <p>
                |
            </p>
            <p className='font-[500]'>
                {props.category}
            </p>

           
        </div>
        <div className='flex text-sm flex-row gap-2 py-2 justify-start items-center'>
           <Image src={product1} width={80} alt='Product1' height={80} />
            <div className='font-[500]'>
                <div>
            <p className='text-[1rem] font-semibold underline cursor-pointer'>
            {props.title}
            </p>
            <p className='text-[1.2rem] font-semibold text-green-700'>
                $179.9  
            </p>
            <p className='text-red-500'>
               28% OFF
            </p>
            </div>
            </div>

           
        </div>
       
    </div>
  )
}

export default Deals