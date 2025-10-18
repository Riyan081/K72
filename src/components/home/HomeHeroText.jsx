import React from "react";
import Video from "./Video";
import videoSrc from "../../assets/69496b2d.mp4";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="lg:text-[10vw] text-[12vw] uppercase lg:leading-[20vh] max-sm:mt-50"> The spark For</div>
      <div className="lg:text-[10vw] text-[12vw] uppercase flex items-center justify-center lg:leading-[20vh] leading-0 ">
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
      
      <div className="lg:text-[10vw] uppercase lg:leading-[20vh] text-[12vw] mt-1">creativE</div>
    </div>
  );
};

export default HomeHeroText;