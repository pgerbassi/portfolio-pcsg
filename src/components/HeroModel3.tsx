import React from "react";
import "@google/model-viewer/lib/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  iosSrc?: string;
  seamlessPoster?: boolean;
  autoplay?: boolean;
  environmentImage?: string;
  exposure?: string;
  interactionPromptThreshold?: string;
  shadowIntensity?: string;
  ar?: boolean;
  arModes?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  cameraOrbit?: string;
  alt?: string;
  sx?: any;
}

interface ModelProps {
  className?: string;
}

const target = "0m 60m 90m";

const HeroModel: React.FC<ModelProps> = ({ className }) => {

  const glbSrc = "./assets/sci-fi_panels.glb";
  const iosSrc = "";

  return (
    <div className={`${className || ''}`}>
      <model-viewer className=" flex justify-center items-center"
        id="about"
        src={glbSrc}
        ios-src={iosSrc}
        seamless-poster
        environment-image="neutral"
        exposure="1.0"
        interaction-prompt-threshold="0"
        shadow-intensity="1"
        ar
        autoplay
        ar-modes="webxr scene-viewer quick-look"
        time-scale="0.5"
        //auto-rotate
        camera-controls
        camera-target={target}
        camera-orbit="0deg 90deg 1.37364m"
        alt="3D model"
      >
      </model-viewer>
    </div>
  );
};

export default HeroModel;