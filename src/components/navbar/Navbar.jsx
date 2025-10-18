import React, { useContext } from "react";
import { useRef, useState } from "react";
import { NavbarContext } from "../../context/NavContext";

const Navbar = () => {
  const navGreefRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { navOpen, setNavOpen } = useContext(NavbarContext);

  // small safety wrapper for ref manip
  const setGreefHeight = (h) => {
    if (navGreefRef.current) navGreefRef.current.style.height = h;
  };

  return (
    <div className=" z-10  flex justify-between fixed top-0 w-full items-start ">
      <div className="p-5 md:p-5">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="30"
          viewBox="0 0 103 44"
          className="fill-amber-50"
        >
          <path
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>

      {/* Desktop / Laptop toggle — keep behavior/layout as-is, show on md+ */}
      <div className="hidden md:block">
        <div
          onClick={() => {
            setNavOpen(true);
          }}
          onMouseEnter={() => {
            setGreefHeight("100%");
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setGreefHeight("0%");
            setIsHovered(false);
          }}
          className="h-13 bg-black w-55 relative"
        >
          <div
            ref={navGreefRef}
            className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
          ></div>
          <div className="relative flex flex-col items-end gap-1 p-3">
            <div
              className={`h-[2px] w-15 mr-5 mt-2 transition-colors ${
                isHovered ? "bg-black" : "bg-amber-100"
              }`}
            ></div>
            <div
              className={`h-[2px] w-8 mr-5 transition-colors ${
                isHovered ? "bg-black" : "bg-amber-100"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Mobile / small screens: compact accessible button — shows only on small screens */}
      <div className="md:hidden flex items-center p-3">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setNavOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setNavOpen(true);
            }
          }}
          className="relative w-10 h-10 flex flex-col justify-center items-center gap-1 bg-black rounded"
        >
          <span
            className={`block w-6 h-[2px] bg-amber-100 transition-transform ${
              navOpen ? "translate-y-0 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-amber-100 transition-opacity ${
              navOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-4 h-[2px] bg-amber-100 transition-transform ${
              navOpen ? "translate-y-0 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;