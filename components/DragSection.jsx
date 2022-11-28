import Image from 'next/image'
import React from 'react'

const DragSection = () => {
  return (
    <div className='mt-[29px] w-full py-[35px] flex flex-col gap-[37px] items-center justify-start border border-dashed border-[#97BEF4] rounded-[12px]'>
        <Image src='/image.svg' width={114} height={88} alt='placeholder-image'/>
        <span className='font-poppins font-[500] text-[12px] leading-[18px] tracking-[-0.035em] text-[#BDBDBD]'>Drag & Drop your image here</span>
    </div>
  )
}

export default DragSection