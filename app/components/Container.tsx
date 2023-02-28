"use client";

import Image from "next/image";
import React, { useState, useCallback } from "react";
import Button from "./Button";
import FileInput from "./FileInput";
import axios from "axios";
import { useMutation } from "react-query";
import Loader from "./Loader";
import Result from "./Result";
import { useDropzone } from "react-dropzone";

type Props = {};

function Container({}: Props) {
  const [image, setImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [form, setForm] = useState<FormData>();

  const onDrop = useCallback((files: any) => {
    setImage(files[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const createPost = async (image: File) => {
    if (!image) return;
    try {
      const formData = new FormData();
      formData.append("image", image);
      const { data } = await axios.post("/api/submit", formData);
      setImageUrl(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const { mutate, isLoading, isSuccess } = useMutation(createPost, {
    onError: (error) => {
      console.log(error);
    },
  });

  if (isLoading) return <Loader />;
  if (isSuccess) return <Result imageUrl={imageUrl} />;

  const handleSubmit = () => {
    if (image) {
      mutate(image);
    }
  };


  return (
    <div className="px-[32px] py-[36px] bg-white rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center">
      <h1 className="text-[18px] leading-[27px] tracking-[-0.035em] text-[#4F4F4F]">
        Upload your image
      </h1>
      <span className="text-[10px] leading-[15px] tracking-[-0.035em] text-[#828282] pt-[15.99px]">
        File should be Jpeg, Png,...
      </span>
      <div
        {...getRootProps()}
        className={`px-[85px] py-[37px] bg-[#F6F8FB] mt-[29px] mb-[18px] border border-[#97BEF4] border-dashed rounded-[12px] ${
          isDragActive && "opacity-50"
        }`}
      >
        <Image src="/image.svg" width={114.13} height={88.24} alt="drag-zone" />
      </div>
      <span className="text-[12px] leading-[18px] tracking-[-0.035em] text-[#BDBDBD]">
        Or
      </span>
      <div className="pt-[21px]">
        {image === undefined ? (
          <FileInput setInputProps={getInputProps} setImage={setImage} />
        ) : (
          <div className="flex flex-col gap-[11px] items-center text-[18px] leading-[22px]">
          <span>{image.name}</span>
          <Button handleSubmit={handleSubmit} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Container;
