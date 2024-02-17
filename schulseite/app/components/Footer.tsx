import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="h-fit w-full flex justify-around mt-28 items-center">
        <div>
          <Image
            src="/images/Schullogo.gif"
            height={400}
            width={400}
            alt="missing Logo"
          ></Image>
        </div>
        <div className="flex flex-col text-center">
            <span>BG und BRG Stockerau</span>
            <span>Unter den Linden 16, 2000 Stockerau</span>
            <span>Tel: 02266/62143</span>
            <span>Fax: 02266/62143-4</span>
            <span>E-Mail: office@bgstockerau.ac.at</span>
        </div>
        <div>
          <Image
            src="/images/GYM_NOE_Logo.jpg"
            height={400}
            width={400}
            alt="missing Logo"
          ></Image>
        </div>
      </section>
    </>
  );
};

export default Footer;



