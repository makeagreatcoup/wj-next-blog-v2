"use client";
import React, { useState } from "react";
import Image from "next/image";

const MotionImg = ({ urls }: { urls: string[] }) => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="w-full   px-10 flex flex-col justify-center items-center gap-5 my-3">
        <div className="w-[800px] h-[400px] overflow-hidden rounded-md">
          <div className=" w-full h-full flex flex-row overflow-hidden relative">
            {urls &&
              urls.map((imageUrl: any, index: number) => (
                <>
                  <div
                    className={`w-full h-full absolute  transition-all ease-linear duration-300 animate-[translate_1s_ease-in-out] ${
                      selected === index
                        ? "opacity-1  translate-y-0"
                        : "opacity-0  translate-y-[-10px]"
                    }`}
                  >
                    <Image
                      src={imageUrl}
                      alt={""}
                      key={index}
                      fill
                      className=" object-center "
                      onClick={() => setSelected(index)}
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
        <div className=" w-[800px] h-[50px] flex justify-evenly">
          {urls &&
            urls.map((imageUrl: any, index: number) => (
              <>
                <div
                  className="relative w-[100px] h-[50px]"
                  onClick={() => setSelected(index)}
                >
                  <Image
                    src={imageUrl}
                    alt={""}
                    key={index}
                    fill
                    className=" object-center rounded-lg absolute cursor-pointer opacity-1"
                  />
                  <div
                    key={'div'+index}
                    className={`w-[100px] h-[50px] border-dark dark:border-red-500 border-2 absolute  rounded-lg p-1 transition-all ease-linear duration-300 ${
                      selected === index ? "opacity-1" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default MotionImg;
