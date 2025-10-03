import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

 const imageArray = [
  
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=640&h=960&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=640&h=960&fit=crop&crop=face",
];
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 20%",
        end: "top -100%",
        pin: true,
        markers: true,
        onUpdate: function (elem) {
          let index;
          if (elem.progress < 1) {
            index = Math.floor(elem.progress * imageArray.length);
          } else {
            index = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[index];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-[45vh] w-[15vw] overflow-hidden rounded-3xl  absolute top-35 left-[29.5vw] bg-red-500"
        >
          <img
            ref={imageRef}
            className="h-[100%] w-[100%] object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          />
        </div>
        <div className=" relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] uppercase text-center leading-[17vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>

          <div className="pl-[40%] mt-10">
            <p className="text-6xl ">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We're
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
