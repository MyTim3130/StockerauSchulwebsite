'use client'
import React from 'react'
import { STRAPI_URL } from "@/globaleVariablen";
import axios from "axios";
import { InformationsData } from './Hero';


/* Möglichkeit etwas von Strapi herunterzuladen */
function downloadFile(url:string, fileName:string) {
    // Fetching the file data from the server
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            // Creating a new URL for the blob object
            const blobUrl = window.URL.createObjectURL(blob);
  
            // Creating a new anchor element
            const a = document.createElement('a');
  
            // Setting the href attribute to the blob URL
            a.href = blobUrl;
  
            // Setting the download attribute to suggest a file name
            a.download = fileName;
  
            // Appending the anchor to the document
            document.body.appendChild(a);
  
            // Triggering a click event on the anchor
            a.click();
  
            // Removing the anchor from the document
            document.body.removeChild(a);
  
            // Releasing the blob URL
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => console.error('Error downloading file:', error));
  }
  

const DownloadButton = ({data}:{data:InformationsData}) => {
  return (
    <button className="bg-[#356498] hover:bg-[#417dc2] text-white font-bold py-1 px-4 rounded mt-3" onClick={()=>{downloadFile(STRAPI_URL + data.attributes.Datei.data.attributes.url, data.attributes.Datei.data.attributes.name) }}>
     Herunterladen
  </button>
  )
}

export default DownloadButton