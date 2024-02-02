"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".navBar", {
      scrollTrigger: "#scrollTriggerNav", // start the animation when ".box" enters the viewport (once)
      opacity: 1,
    });
  }, []);
  return (
    <section className="fixed z-50 h-20 w-screen flex justify-center navBar">
      <div className="flex w-5/6 justify-between items-center text-green-950 text-xl">
        <span>BG Stockerau</span>
        <div>

          <Hamburger toggled={isOpen} toggle={setOpen} />
          <div className="absolute">
            {isOpen && (
              <div>
                <div className="w-screen h-screen bg-black opacity-35 -z-50 absolute right-0 top-0"></div>
                <div className="w-32 h-screen flex justify-center bg-[#CEFF00] fixed bottom-0 right-0 -z-10 ">
                  <div className="mt-28 flex flex-col h-[70vh] justify-evenly">
                    <Link href="./">LINK1</Link>
                    <Link href="./">LINK1</Link>
                    <Link href="./">LINK1</Link>
                    <Link href="./">LINK1</Link>
                    <Link href="./">LINK1</Link>
                    <Link href="./">LINK1</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute h-20 w-screen bg-gradient-to-b to-[#CEFF00] from-[#ABD300] flex justify-center navBar opacity-0 -z-10"></div>
    </section>
  );
};

export default NavBar;
