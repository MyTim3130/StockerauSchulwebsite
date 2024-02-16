import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { STRAPI_URL } from "@/globaleVariablen";
import DownloadButton from "./DownloadButton";
import BeitragKarte from "./BeitragKarte";
import Iframe from "react-iframe";
import HeroImage from "./HeroImage";

/* Interface für Informations Strapi Komponenten */

export interface InformationsData {
  id: number;
  attributes: {
    Titel: string;
    Link: string | null;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    Bild: any;
    Datei: any;
  };
}

export interface BeitragsData {
  id: number;
  attributes: {
    Titel: string;
    Beschreibung: string | null;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    Datum: Date;
    Cover: any;
  };
}

export interface TerminsData {
  id: number;
  attributes: {
    Name: string;
    Von: string;
    Bis: string;
    Uhrzeit: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

/* 
Hier ist die Hero Sektion der Website.
Gemacht am 29.012024
*/

export default async function Hero() {
  /* Strapi integration */

  const response = await fetch(
    "http://localhost:1337/api/information-anmeldungen/1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const informationAnmeldung = await response.json();
  /*console.log(informationAnmeldung)*/

  const response2 = await axios.get(
    "http://localhost:1337/api/informationen?populate=*"
  );
  /*  console.log(response2.data.data);*/

  const response3 = await axios.get(
    "http://localhost:1337/api/beitraege?populate=*"
  );
  /*  console.log(response3.data.data);*/

  const response4 = await axios.get("http://localhost:1337/api/termine-events");
  /* console.log(response4.data.data); */



  return (
    <>
      <div className="h-fit w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.1] absolute z-[-20] flex items-center justify-center flex-col">
        <section className="h-fit w-screen bg-dotted-spacing-4 bg-dotted-gray-200">
         <HeroImage />
          <div className="sm:h-[35vw] h-[55vh]"></div>
          <div className="w-5/6 sm:w-2/6 sm:ml-24 ml-4 sm:mt-56 xl:mt-0">
            <h1 className="text-4xl mb-5">BG Stockerau</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis suscipit rem quis ratione quasi nesciunt consequatur
              illo consectetur ipsam corporis? Inventore perferendis non iste
              sunt ipsa, expedita exercitationem doloribus alias. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ut quasi consequatur
              in, voluptatem corrupti atque fuga ratione et ipsum illo sequi
              mollitia esse, rerum, eaque perspiciatis temporibus nesciunt neque
              cumque!
            </p>
          </div>
          <div
            className="w-[screen] h-96 flex justify-center items-center mt-24"
            id="scrollTriggerNav"
          >
            <Iframe
              url="https://www.youtube.com/embed/w50VVpHyACA"
              id=""
              className="w-96 h-60 md:w-[48rem] md:h-96 rounded-2xl"
              display="block"
              position="relative"
            />
          </div>

          <section className="flex flex-col items-center mt-11">
            <div className="flex justify-around items-center w-screen">
              <div className="w-[20vw] h-[2px] bg-black sm:w-[40vw]" />
              <h2 className="text-2xl sm:text-3xl">Informationen</h2>
              <div className="w-[20vw] h-[2px] bg-black sm:w-[40vw]" />
            </div>
            <div className="ml-3 mt-5 sm:text-lg sm:mt-10">
              <div>
                <h3 className="font-bold">
                  {informationAnmeldung.data.attributes.Titel}
                </h3>
                <span>{informationAnmeldung.data.attributes.Beschreibung}</span>
              </div>
              <div className="w-full flex justify-evenly">
                <button className="bg-[#356498] hover:bg-[#417dc2] text-white font-bold py-1 px-4 rounded mt-3">
                  Infos Anmeldung
                </button>
                <button className="bg-[#356498] hover:bg-[#417dc2] text-white font-bold py-1 px-4 rounded mt-3">
                  Terminbuchung
                </button>
              </div>
            </div>

            {response2.data.data.map(
              (data: InformationsData, index: number) => {
                /* console.log(data.attributes.Datei) */
                return (
                  <div key={index} className="flex flex-col items-center">
                    <h3 className="font-bold mt-20 mb-2 text-lg">
                      {data.attributes.Titel}
                    </h3>
                    {data.attributes.Bild.data && (
                      <img
                        src={
                          STRAPI_URL + data.attributes.Bild.data.attributes.url
                        }
                        className="sm:h-96 rounded-md h-52"
                        alt="missing Image"
                      />
                    )}
                    <div className="w-full flex items-center justify-evenly">
                      {data.attributes.Link && (
                        <button className="bg-[#356498] hover:bg-[#417dc2] text-white font-bold py-1 px-4 rounded mt-3">
                          <a href={data.attributes.Link}>Mehr Infos</a>
                        </button>
                      )}
                      {data.attributes.Datei.data && (
                        <DownloadButton data={data}></DownloadButton>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </section>

          <section className="flex flex-col items-center mt-11">
            <div className="flex justify-around items-center w-screen">
              <div className="w-[20vw] h-[2px] bg-black sm:w-[40vw]" />
              <h2 className="text-2xl sm:text-3xl">Beiträge</h2>
              <div className="w-[20vw] h-[2px] bg-black sm:w-[40vw]" />
            </div>
            <BeitragKarte></BeitragKarte>
          </section>
        </section>

        <section className="flex flex-col items-center mt-11">
          <div className="flex justify-around items-center w-screen">
            <div className="w-[20vw] h-[2px] bg-black sm:w-[40vw]" />
            <h2 className="text-2xl sm:text-3xl">Termine</h2>
            <div className="w-[20vw] h-[2px] bg-black sm:w-[40vw]" />
          </div>

          <div>
            {response4.data.data
              .slice(-5)
              .map((data: TerminsData, index: number) => {
                /*console.log(data.attributes.Von)*/
                /* console.log(data.attributes.Name) */

                /* Name des Termins hinzufügen und Datum
                Wenn vorhanden dann auch EndDatum und Uhrzeit
              */
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between w-[80vw] mt-7 lg:w-[50vw] lg:text-lg xl:text-xl">
                      <div className="w-3/6"> {data.attributes.Name} </div>
                      <div className="w-3/6 text-end">
                        <div>
                          <div>
                            {data.attributes.Von.slice(8, 10) +
                              "." +
                              data.attributes.Von.slice(5, 7) +
                              "." +
                              data.attributes.Von.slice(0, 4)}
                          </div>
                          <div>
                            {data.attributes.Bis &&
                              data.attributes.Uhrzeit === null && (
                                <div>
                                  bis{" "}
                                  {data.attributes.Bis.slice(8, 10) +
                                    "." +
                                    data.attributes.Bis.slice(5, 7) +
                                    "." +
                                    data.attributes.Bis.slice(0, 4)}
                                </div>
                              )}
                          </div>
                        </div>

                        {data.attributes.Uhrzeit && (
                          <div className="ml-5">{data.attributes.Uhrzeit} </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <div className="w-[90vw] h-[2px] bg-black mb-10 mt-10" />
        <section>
          <div className="grid grid-cols-3">
            <Image
              className="h-60 w-auto object-scale-down"
              src="/images/LogoESF.png"
              height={1000}
              width={1000}
              alt="missing Image"
            ></Image>
            <Image
              className="h-60 w-auto object-scale-down"
              src="/images/EHfit_23_24.png"
              height={1000}
              width={1000}
              alt="missing Image"
            ></Image>
            <Image
              className="h-60 w-auto object-scale-down"
              src="/images/LogoSchulsport.jpg"
              height={1000}
              width={1000}
              alt="missing Image"
            ></Image>
          </div>
        </section>
      </div>
    </>
  );
}
