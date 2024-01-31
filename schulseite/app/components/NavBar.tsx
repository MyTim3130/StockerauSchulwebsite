'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";




const NavBar = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    gsap.to(".navBar", {
      scrollTrigger: ".navBar", // start the animation when ".box" enters the viewport (once)
      opacity: 1,
    });
  
  },[])
 

  return (
    <section className="fixed z-50 h-20 w-screen bg-gradient-to-b to-[#CEFF00] from-[#ABD300] flex justify-center navBar opacity-0">
    <div className="flex w-5/6 justify-between items-center">
      <span>BG Stockerau</span>
      <div>IMAGE</div>
    </div>
  </section>
  )
}

export default NavBar
