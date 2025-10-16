import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const projects = [
    {
      image1:"https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      image2:"https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996"
      
    },
   
    {
      image1:"https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
      image2:"https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479"
    }
    ,{
      image1:"https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
       image2:"https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022"
    },
    
    {
      image1:"https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860",
       image2:"https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47"
    },
   
    
  ]

  useGSAP(function(){
    gsap.from(".hero",{
      height:"150px",
      stagger:{
        amount:0.5,
        
      },
      scrollTrigger:{
        trigger:".lol",
        markers:true,
        start:"top 100%",
        end:"top -250%",
        scrub:true,
        
      }
    })
  })


  return (
    <div className="p-6">
      <div className=" pt-[30vh] mb-[10vh]">
        <h1 className="font-[font2] text-[7vw] uppercase"> Projects</h1>
      </div>

      <div className="-mt-20 lol">
        {projects.map((project, index) => (
           <div key={index} className="hero w-full h-[500px] mt-5 flex gap-4 ">
          <ProjectCard key={index} image1={project.image1} image2={project.image2}/>
            </div>
        ))}

      </div>
      
    </div>
  );
};

export default Projects;
