import React from 'react'

const ChooseSection = () => {
  return (
    <div className='mt-[18px] flex flex-col items-center justify-start gap-[21px]'>
        <span className='font-poppins text-[15px] leading-[21px] tracking-[-0.035em] text-[#BDBDBD]'>Or</span>
        <label className='bg-[#2F80ED] rounded-[8px] py-[8px] px-[16px] text-white' htmlFor="file">
            Choose a file
        </label>
        <input className='invisible' type="file" name="file" id="file" />
    </div>
  )
}

export default ChooseSection