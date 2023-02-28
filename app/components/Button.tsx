"use client";
import React from 'react'

type Props = {
  handleSubmit:React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({handleSubmit}: Props) => {
  return (
    <button onClick={handleSubmit} name='submit' className='text-[12px] leading-[16px] tracking-[-0.035em] text-white py-[8px] px-[16px] rounded-[8px] bg-[#2F80ED]'>
        Submit
    </button>
  )
}

export default Button