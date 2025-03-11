import Image from 'next/image'
import React from 'react'


const ProductArticle = (props:any) => {
  return (
    <div className='md:w-[100%] min-w-[310px] mt-5 md:mt-0  flex flex-col gap-2 border-b-2 border-gray-200'>
        <div className='flex text-md flex-row gap-2 justify-start items-center'>
            <p className='font-[500]'>
                {new Date(props.date).toDateString()}   
            </p>
            <p>
                |
            </p>
            <p className='font-[500]'>
                {props.category}
            </p>

           
        </div>
        <div>
            {
                props.imgurl && <Image src={props.imgurl} width={100} height={100} alt='Product1' className='md:w-[60%] w-[310px] ' layout='responsive'/>
            }
          
        </div>
         <h2 className='text-[1.8rem] font-semibold'>
            {props.title}
            </h2>
            <div dangerouslySetInnerHTML={
                {__html:props.description}
            } className=' text-gray-700 '/>
            </div>
    
  )
}

export default ProductArticle