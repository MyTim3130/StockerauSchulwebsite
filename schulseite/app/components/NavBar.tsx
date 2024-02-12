"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import {
  CDropdownItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
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
    <section className="fixed z-50 h-20 w-screen flex justify-center navBar bg-[#CEFF00]">
      <div className="flex w-5/6 justify-between items-center text-green-950 text-xl">
        <span className="text-xl md:text-base xl:text-xl min-w-28"> <Link href="/">BG Stockerau</Link></span>
        <div>
          <div className="hidden w-full justify-evenly lg:flex items-center">
            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-sm md:text-base xl:text-xl">Personen</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="/Personen/Direktion">Direktion</CDropdownItem>
                <CDropdownItem href="/Personen/Administration">Administration</CDropdownItem>
                <CDropdownItem href="/Personen/Sekretariat">Sekretariat</CDropdownItem>
                <CDropdownItem href="/Personen/Lehrerteam">Lehrerteam</CDropdownItem>
                <CDropdownItem href="/Personen/Schulaerztin">Schulärztin</CDropdownItem>
                <CDropdownItem href="/Personen/Schulpsychologin">Schulpsychologin</CDropdownItem>
                <CDropdownItem href="/Personen/SGA">SGA</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-sm md:text-base xl:text-xl">Schulprofil</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">ab der 1. Klasse</CDropdownItem>
                <CDropdownItem href="#">ab der 3. Klasse</CDropdownItem>
                <CDropdownItem href="#">Stundentafel</CDropdownItem>
                <CDropdownItem href="#">Lehrpläne</CDropdownItem>
                <CDropdownItem href="#">Nachmittagsbetreuung</CDropdownItem>
           
              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-sm md:text-base xl:text-xl">Schule</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Über unsere Schule</CDropdownItem>
                <CDropdownItem href="#">Virtueller Rundgang</CDropdownItem>
                <CDropdownItem href="#">Damals und Heute</CDropdownItem>
                <CDropdownItem href="#">Klassen</CDropdownItem>
                <CDropdownItem href="#">Maturafotos</CDropdownItem>
                <CDropdownItem href="#">Maturatreffen</CDropdownItem>
                <CDropdownItem href="#">Elternverein</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-sm md:text-base xl:text-xl">Informationen</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Termine</CDropdownItem>
                <CDropdownItem href="#">Stunden- und Pauseneinteilung</CDropdownItem>
                <CDropdownItem href="#">Anmeldung</CDropdownItem>
                <CDropdownItem href="#">Digitale Schule</CDropdownItem>
                <CDropdownItem href="#">Schülerfond</CDropdownItem>
                <CDropdownItem href="#">Bildungsberatung</CDropdownItem>
                <CDropdownItem href="#">Suchtprävention</CDropdownItem>
                <CDropdownItem href="#">Theater der Jugend</CDropdownItem>
                <CDropdownItem href="#">Verein der Freude und Maturanten</CDropdownItem>
                <CDropdownItem href="#">Download</CDropdownItem>
                <CDropdownItem href="#">Impressum</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-sm md:text-base xl:text-xl">Fächer</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Pflichtfächer</CDropdownItem>
                <CDropdownItem href="#">Wahlpflichtfächer</CDropdownItem>
                <CDropdownItem href="#">Unverbindliche Übungen</CDropdownItem>
                <CDropdownItem href="#">Übergreifende Projekte und Veranstaltungen</CDropdownItem>

              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-sm md:text-base xl:text-xl">Archiv</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">aktuelles Schuljahr</CDropdownItem>
                <CDropdownItem href="#">2022/2023</CDropdownItem>
                <CDropdownItem href="#">2021/2022</CDropdownItem>
                <CDropdownItem href="#">2020/2021</CDropdownItem>
                <CDropdownItem href="#">2019/2020</CDropdownItem>

              </CDropdownMenu>
            </CDropdown>

    <span className="text-sm md:text-base xl:text-xl mr-4 ml-4">edividual.at</span>
    <span className="text-sm md:text-base xl:text-xl">Klassenbuch</span>
      
          </div>
        </div>
        <div>
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="absolute">
            {isOpen && (
              <div>
                <div className="w-screen h-screen bg-black opacity-35 -z-50 absolute right-0 top-4"></div>
                <div className="w-52 h-screen flex justify-center bg-[#CEFF00] fixed bottom-0 right-0 -z-10 ">
                  <div className="mt-28 flex flex-col h-[70vh] justify-evenly">
                  <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-xl">Personen</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="/Personen/Direktion">Direktion</CDropdownItem>
                <CDropdownItem href="/Personen/Administration">Administration</CDropdownItem>
                <CDropdownItem href="/Personen/Sekretariat">Sekretariat</CDropdownItem>
                <CDropdownItem href="/Personen/Lehrerteam">Lehrerteam</CDropdownItem>
                <CDropdownItem href="/Personen/Schulaerztin">Schulärztin</CDropdownItem>
                <CDropdownItem href="/Personen/Schulpsychologin">Schulpsychologin</CDropdownItem>
                <CDropdownItem href="/Personen/SGA">SGA</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-xl">Schulprofil</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">ab der 1. Klasse</CDropdownItem>
                <CDropdownItem href="#">ab der 3. Klasse</CDropdownItem>
                <CDropdownItem href="#">Stundentafel</CDropdownItem>
                <CDropdownItem href="#">Lehrpläne</CDropdownItem>
                <CDropdownItem href="#">Nachmittagsbetreuung</CDropdownItem>
           
              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-xl">Schule</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Über unsere Schule</CDropdownItem>
                <CDropdownItem href="#">Virtueller Rundgang</CDropdownItem>
                <CDropdownItem href="#">Damals und Heute</CDropdownItem>
                <CDropdownItem href="#">Klassen</CDropdownItem>
                <CDropdownItem href="#">Maturafotos</CDropdownItem>
                <CDropdownItem href="#">Maturatreffen</CDropdownItem>
                <CDropdownItem href="#">Elternverein</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-xl">Informationen</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Termine</CDropdownItem>
                <CDropdownItem href="#">Stunden- und Pauseneinteilung</CDropdownItem>
                <CDropdownItem href="#">Anmeldung</CDropdownItem>
                <CDropdownItem href="#">Digitale Schule</CDropdownItem>
                <CDropdownItem href="#">Schülerfond</CDropdownItem>
                <CDropdownItem href="#">Bildungsberatung</CDropdownItem>
                <CDropdownItem href="#">Suchtprävention</CDropdownItem>
                <CDropdownItem href="#">Theater der Jugend</CDropdownItem>
                <CDropdownItem href="#">Verein der Freude und Maturanten</CDropdownItem>
                <CDropdownItem href="#">Download</CDropdownItem>
                <CDropdownItem href="#">Impressum</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-xl">Fächer</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Pflichtfächer</CDropdownItem>
                <CDropdownItem href="#">Wahlpflichtfächer</CDropdownItem>
                <CDropdownItem href="#">Unverbindliche Übungen</CDropdownItem>
                <CDropdownItem href="#">Übergreifende Projekte und Veranstaltungen</CDropdownItem>

              </CDropdownMenu>
            </CDropdown>

            <CDropdown >
              <CDropdownToggle color="transparent">
                <span className="text-xl">Archiv</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">aktuelles Schuljahr</CDropdownItem>
                <CDropdownItem href="#">2022/2023</CDropdownItem>
                <CDropdownItem href="#">2021/2022</CDropdownItem>
                <CDropdownItem href="#">2020/2021</CDropdownItem>
                <CDropdownItem href="#">2019/2020</CDropdownItem>

              </CDropdownMenu>
            </CDropdown>

    <span className="flex justify-center">edividual.at</span>
    <span className="flex justify-center">Klassenbuch</span>
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
