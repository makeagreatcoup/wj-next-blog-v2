"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import Image from "next/image";

const MotionImg = ({ urls }: { urls: string[] }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [current, setCurrent] = useState("");
  return (
    <>

      <motion.div className="w-full px-10 flex justify-center gap-5 my-10">
        {urls &&
          urls.map((imageUrl: any, index: number) => (
            <>
              <motion.div
                layoutId={imageUrl}
                onClick={() => setSelectedId(imageUrl)}
              >
                {/* <Image
                  src={imageUrl}
                  alt={""}
                  key={index}
                  width={200}
                  height={0}
                  className=" object-center  hover:scale-105 transition-all ease duration-300 cursor-pointer"
                /> */}
                <motion.h3>{imageUrl}</motion.h3>
              </motion.div>
            </>
          ))}
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            {/* <Image
              src={selectedId}
              alt={selectedId}
              key={"0"}
              width={200}
              height={0}
              className=" object-center  hover:scale-105 transition-all ease duration-300 cursor-pointer"
            /> */}
            <motion.img src={selectedId}></motion.img>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MotionImg;
