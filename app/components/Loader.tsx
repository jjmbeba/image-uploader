"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="pt-[36px] z-50 pl-[16px] pr-[27.35px] pb-[43.82px] rounded-[12px]  shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
      <h2 className="font-[500] text-[18px] leading-[27px] tracking-[-0.035em] text-[#4F4F4F]">
        Uploading...
      </h2>
      <div className="relative mt-[30.74px] z-[-10] bg-[#F2F2F2] rounded-[8px] h-[6px] w-[340px]">
        <motion.div
         animate={{
          x:[0,240,0]
        }}
        transition={{
          duration:2,
          repeat: Infinity
        }}
         className="absolute rounded-[8px] bg-[#2F80ED] h-[6px] w-[100px] z-0" />
      </div>
    </div>
  );
};

export default Loader;
