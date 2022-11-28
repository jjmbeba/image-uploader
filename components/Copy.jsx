import React from 'react'

const Copy = () => {
  return (
    <div className='relative mt-[25px] w-full border border-solid border-[#E0E0E0] bg-[#F6F8FB] rounded-[8px]'>
        <input className='max-w-[338px] text-ellipsis focus:outline-none border-none py-[11px] bg-transparent pl-[7px]' type='text'/>
        <button className='bg-[#2F80ED] text-white font-[500] text-[12px] leading-[16px] tracking-[-0.035em] px-[24px] py-[12px] rounded-[8px] absolute right-[2px] top-[50%] translate-y-[-50%]'>
            Copy Link
        </button>
    </div>
  )
}

export default Copy