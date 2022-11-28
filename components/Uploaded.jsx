import Image from 'next/image'
import React from 'react'
import Copy from './Copy'

const Uploaded = () => {
  return (
    <div className='shadow-container px-[31px] py-[35px] font-poppins font-[500] flex flex-col items-center justify-start'>
        <Image src='/check.svg' width={35} height={35} alt='check-icon'/>
        <span className='text-[18px] leading-[27px] tracking-[-0.035em] text-[#4F4F4F] mt-[11px]'>Uploaded Successfully!</span>
        <Image className='mt-[25px] rounded-[12px]' src='/test.jpg' width={338} height={224} alt='uploaded-image'/>
        <Copy/>
    </div>
  )
}

export default Uploaded