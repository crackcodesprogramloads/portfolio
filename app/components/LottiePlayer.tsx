import "@dotlottie/player-component";

interface LottieProps {
  animationData: string;
  style?: { [key: string]: number | string };
}

const LottiePlayer: React.FC<LottieProps> = ({ animationData, style }) => {
  return <dotlottie-player src={animationData} autoplay loop style={style} />;
};

export default LottiePlayer;
