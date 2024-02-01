'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";




const NavBar = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    gsap.to(".navBar", {
      scrollTrigger: "#scrollTriggerNav", // start the animation when ".box" enters the viewport (once)
      opacity: 1,
    });
  
  },[])
 

  return (
    <section className="fixed z-50 h-20 w-screen flex justify-center navBar">
    <div className="flex w-5/6 justify-between items-center text-green-950 text-xl">
      <span>BG Stockerau</span>
      <div>IMAGE</div>
    </div>
    <div className="absolute h-20 w-screen bg-gradient-to-b to-[#CEFF00] from-[#ABD300] flex justify-center navBar opacity-0 -z-10"></div>
  </section>
  )
}

export default NavBar
