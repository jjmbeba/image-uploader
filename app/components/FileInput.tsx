"use client"
import React, { useState } from 'react'

type Props = {
  setImage:Function,
  setInputProps:Function
}

const FileInput = ({setImage, setInputProps}: Props) => {

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return;
    const file = e?.target.files[0];
    setImage(file);
  }

  return (
    <label className='text-[12px] leading-[16px] tracking-[-0.035em] text-white py-[8px] px-[16px] rounded-[8px] bg-[#2F80ED]'>
      <input {...setInputProps()} hidden onChange={handleChange} type='file' name='file'/>
      Choose a file
    </label>
  )
}

export default FileInput