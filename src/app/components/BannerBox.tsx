import Image from 'next/image'
import React from 'react'
import product1 from '../../../public/product1.webp'

const BannerBox = (props:any) => {
  return (
    <div className='md:w-[80%] flex flex-col gap-2 py-3 border-b-2 border-gray-200'>
        <div className='flex text-sm flex-row gap-2 justify-start items-center'>
            <p className='font-[500]'>
                {new Date(props.date).toDateString()}   
            </p>
            <p>
                |
            </p>
            <p className='font-[500]'>
                {props?.category}
            </p>

           
        </div>
        <div>
            {
                props.imgurl && <Image src={props.imgurl} width={800} height={190} alt='Product1' className='w-[100%]' />
            }
            
        </div>
         <h2 className='text-[1.2rem] font-semibold'>
            {props.title}
            </h2>
            <div dangerouslySetInnerHTML={
                {__html:props.description.slice(0,150)}
            } className=' text-gray-700 text-sm'/>
            </div>
    
  )
}

export default BannerBox