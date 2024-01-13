"use client"
import React from 'react';
import '@dotlottie/react-player/dist/index.css';
import { DotLottiePlayer } from '@dotlottie/react-player';

const LottieAnimation = () => {
  return (
      <DotLottiePlayer
        src="/animation_llqd7ey4.lottie"
        autoplay
        loop
       />
       
  );
};

export default LottieAnimation;