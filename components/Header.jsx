import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[16px] font-poppins font-[500]'>
        <h1 className='text-[21px] leading-[27px] tracking-[-0.035em] text-[#4F4F4F]'>Upload your image</h1>
        <h3 className='text-[13px] leading-[15px] tracking-[-0.035em] text-[#828282]'>File should be Jpeg, Png,...</h3>
    </div>
  )
}

export default Header