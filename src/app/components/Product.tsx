import Image from 'next/image'
import React from 'react'
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Product = (props:any) => {
    const router = useRouter()

  return (
    <Link href={`/articles/${props.category}/${props.slug}`}>
    <div
 

    className='md:w-[100%] min-w-[310px] mt-10 md:mt-0  flex flex-col gap-2 py-3 border-b-2 border-gray-200'>
        <div className='flex text-sm flex-row gap-2 justify-start items-center'>
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
        <div className='md:w-[100%] relative w-[310px] '> 
            {props.imgurl && <Image src={props.imgurl} alt='Product1' className='md:w-[100%] w-[310px] ' objectFit='contain' 
            layout='responsive' width={310} height={310}
            />}
         
        </div>
         <h2 className='text-[1.8rem] font-semibold'>
            {props.title}
            </h2>
            {/* <div dangerouslySetInnerHTML={
                {__html:props.description.slice(0,200)}
            } className=' text-gray-700 '/> */}
                <ReactMarkdown>
                    {DOMPurify.sanitize(props.description.slice(0,180))}
                </ReactMarkdown>
            </div>  
            </Link>
    
  )
}

export default Product