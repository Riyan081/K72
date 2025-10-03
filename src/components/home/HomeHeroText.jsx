import React from "react";
import Video from "./Video";
import videoSrc from "../../assets/69496b2d.mp4";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[10vw] uppercase leading-[20vh]"> The spark For</div>
      <div className="text-[10vw] uppercase flex items-center justify-center leading-[20vh]">
        All{" "}
        <div
          className="relative h-[8vw] w-[17vw] rounded-full overflow-hidden"
          style={{
            
            marginLeft: "10px",
          }}
        >
          <video
            muted
            loop
            autoPlay
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '30%'
            }}
            src={videoSrc}
          />
        </div>
        {" "}Things
      </div>
      
      <div className="text-[10vw] uppercase leading-[20vh]">creativE</div>
    </div>
  );
};

export default HomeHeroText;