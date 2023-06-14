"use client";

import Lottie from "lottie-light-react";

interface LottieProps {
  animationData: unknown;
  style?: { [key: string]: number | string };
}

const LottiePlayer: React.FC<LottieProps> = ({ animationData, style }) => {
  return (
    <>
      <Lottie animationData={animationData} style={style} />
    </>
  );
};

export default LottiePlayer;
