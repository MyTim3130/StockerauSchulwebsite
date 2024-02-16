'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'




const HeroImage = () => {

// gsap library um einen Parallax Effekt am Hero Image zu machne
useEffect(()=>{
    gsap.to("#heroImage",  {y:100,
      scrollTrigger:{
        trigger: "#heroImage",
        start: "top top",
        end: "center top",
        scrub: true,
  
      }
    })
  }, [])
  

  return (
    <div
            className="h-screen w-screen heroClipPath absolute -z-10 bg-mobile-header md:bg-desktop-header sm:bg-contain xl:bg-cover bg-contain"
            id="heroImage"
          />
  )
}

export default HeroImage