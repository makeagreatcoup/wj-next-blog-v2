import Image from "next/image";
import React from "react";
import profileCharacter from "@/public/character.png"

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="makeagreatcoup"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          梦想远大，努力工作，成就更多!
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          作为自由职业开发者，我以键盘为帆，代码为星，在博客中记录技术探索与创新实践。每一行优雅代码、每一次技术突破，都凝聚着对编程的热爱与执着。通过分享敏捷开发、开源理念及实战经验，我致力于点燃同行热情，用智慧照亮行业前行之路，共同构建更智能便捷的数字世界。.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
