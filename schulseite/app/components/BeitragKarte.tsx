'use client'
import React from 'react'
import axios from 'axios';
import { STRAPI_URL } from '@/globaleVariablen';
import { BeitragsData } from './Hero';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";



async function BeitragKarte(){

    const response3 = await axios.get(
        "http://localhost:1337/api/beitraege?populate=*"
      );
      /*  console.log(response3.data.data);*/
  return (
  
    <div className="sm:grid grid-cols-2 w-[80vw]">
    {response3.data.data
      .slice(-4)
      .map((data: BeitragsData, index: number) => {
        /* console.log(data.attributes.Titel) */
        /* console.log(data.attributes.Cover) */
        return (
            <CardContainer key={index}>
          <CardBody className="flex flex-col items-center mt-12 sm:mb-10">
            <CardItem className="flex items-center flex-col w-fit">
              <img
                className="sm:h-52 lg:h-72 xl:h-96 rounded-md h-52"
                src={
                  STRAPI_URL + data.attributes.Cover.data.attributes.url
                }
                alt="missing Image"
                
              />
              <CardItem translateZ={20}>
              <h4 className="mt-5 text-lg flex w-[80vw] text-center justify-center sm:text-xl sm:w-auto">
                {data.attributes.Titel}
              </h4>
              </CardItem>
            </CardItem>
          </CardBody>
            </CardContainer>
        );
      })}
  </div>

  )
}

export default BeitragKarte