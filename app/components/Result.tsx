"use client";
import Image from "next/image";
import React from "react";
import { toast } from 'react-hot-toast';

type Props = {
    imageUrl:string
};

const Result = ({imageUrl}: Props) => {
    
  const notify = async () => {
    await navigator.clipboard.writeText(imageUrl);
    return toast.success("Copied to keyboard!");
  };

  return (
    <div className="px-[31.18px] py-[39.5px] flex flex-col items-center shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-[12px]">
      <Image
        src={'/check.svg'}
        width={35}
        height={35}
        alt='check-icon'
      />
      <h2 className="mt-[11px] text-[18px] leading-[27px] tracking-[-0.035em] text-[#4F4F4F]">
        Uploaded Successfully!
      </h2>
      <Image
        className="mt-[25px] rounded-[12px]"
        src={imageUrl}
        width={338}
        height={224}
        alt="pic"
      />
      <div className="mt-[25px] py-[2px] pl-[7.12px] rounded-[8px] border border-[#E0E0E0] bg-[#F6F8FB]">
        <input
          className="text-ellipsis w-[240px] h-full border-none outline-none text-[8px] leading-[12px] tracking-[-0.035em] font-[500]"
          type="text"
          name="url"
          id="url"
          contentEditable={false}
          value={imageUrl}
        />
        <button onClick={notify} className="ml-[14px] mr-[2px] py-[9px] px-[18px] text-[8px] leading-[12px] tracking-[-0.035em] text-white bg-[#2F80ED] rounded-[8px]">
            Copy Link
        </button>
      </div>
    </div>
  );
};

export default Result;
