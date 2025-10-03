import React from "react";
import videoSrc from "../../assets/69496b2d.mp4";

const Video = () => {
  return (
    <div className="w-full h-screen">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      ></video>
    </div>
  );
};

export default Video;
