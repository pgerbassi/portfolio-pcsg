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

const Model: React.FC<ModelProps> = ({ className }) => {

  const glbSrc = "./assets/space_sci_fi.glb";
  const iosSrc = "/assets/space_sci_fi.usdz";

  return (
    <div className={`${className || ''}`}>
      <model-viewer className=""
        id=""
        src={glbSrc}
        ios-src={iosSrc}
        seamless-poster
        environment-image="neutral"
        exposure="1.0"
        interaction-prompt-threshold="0"
        shadow-intensity=""
        ar
        autoplay
        ar-modes="webxr scene-viewer quick-look"
        //auto-rotate
        //camera-controls
        camera-target="0m 7m -40m"
        camera-orbit="0deg 90deg 0deg 8.37364m"
        alt="3D model"
      >
      </model-viewer>
    </div>
  );
};

export default Model;