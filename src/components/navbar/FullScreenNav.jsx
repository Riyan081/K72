import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const FullScreenNav = () => {
  const stairParentRef = useRef(null);
  const fullNavLinksRef = useRef(null);

  useGSAP(function(){
      const tl = gsap.timeline();

      tl.from('.stairs',{

       delay:1,
        height:0,
        stagger:{
          amount:-0.2
        }

      })


      tl.from(fullNavLinksRef.current,{
        opacity:0

      }
      )

      tl.from(".Link",{
        opacity:0,
        rotateX:90,
        transformOrigin:"top center",        
        stagger:{
          amount:0.3
        }
      })
  },[])
  return (
    <div
      id="fullScreenNav"
      className="h-screen w-full overflow-x-hidden  absolute "
    >
      <div ref={stairParentRef} className="h-screen w-full fixed ">
        <div className="h-full w-full flex ">
          <div className="stairs h-full w-1/5 bg-red-500"></div>
          <div className="stairs h-full w-1/5 bg-red-500"></div>
          <div className="stairs h-full w-1/5 bg-red-500"></div>
          <div className="stairs h-full w-1/5 bg-red-500"></div>
          <div className="stairs h-full w-1/5 bg-red-500"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef}className="relative">
        <div className="flex justify-between w-full items-start p-5">
          <div className="">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="40"
              viewBox="0 0 103 44"
              className="fill-amber-50"
            >
              <path
                fill-rule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div className="h-25 w-25  relative cursor-pointer ">
            <div className="h-35 w-0.5 absolute -rotate-45 origin-top bg-[#d3fd50]"></div>
            <div className="h-35 w-0.5 right-0 absolute rotate-45 origin-top bg-[#d3fd50]"></div>
          </div>
        </div>

        <div id="allLinks py-60">
          <div className="Link border-y-1  relative">
            <h1 className="text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
              WORK
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
              <div className="moveX flex items-center flex-shrink-0">
                <h2 className="whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Thumbnail"
                />
                <h2 className=" whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className=" rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt="Project Thumbnail"
                />
              </div>

              <div className="moveX flex items-center flex-shrink-0">
                <h2 className="whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Thumbnail"
                />
                <h2 className=" whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className=" rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt="Project Thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="Link border-y-1  relative">
            <h1 className="text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
              WORK
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
              <div className="moveX flex items-center flex-shrink-0">
                <h2 className="whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Thumbnail"
                />
                <h2 className=" whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className=" rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt="Project Thumbnail"
                />
              </div>

              <div className="moveX flex items-center flex-shrink-0">
                <h2 className="whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Thumbnail"
                />
                <h2 className=" whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className=" rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt="Project Thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="Link border-y-1  relative">
            <h1 className="text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
              WORK
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
              <div className="moveX flex items-center flex-shrink-0">
                <h2 className="whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Thumbnail"
                />
                <h2 className=" whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className=" rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt="Project Thumbnail"
                />
              </div>

              <div className="moveX flex items-center flex-shrink-0">
                <h2 className="whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Thumbnail"
                />
                <h2 className=" whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className=" rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt="Project Thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="Link border-y-1  relative">
            <h1 className="text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
              WORK
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
              <div className="moveX flex items-center flex-shrink-0">
                <h2 className="whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Thumbnail"
                />
                <h2 className=" whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className=" rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt="Project Thumbnail"
                />
              </div>

              <div className="moveX flex items-center flex-shrink-0">
                <h2 className="whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Thumbnail"
                />
                <h2 className=" whitespace-nowrap text-[8vw] upercase font-[font2] leading-[0.8] pt-3 text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className=" rounded-full w-52 object-cover"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt="Project Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
