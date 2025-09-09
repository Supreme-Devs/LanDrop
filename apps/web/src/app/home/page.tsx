"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { webRTCService } from "@/services/webRTC.server";

export default function Home() {
  useEffect(() => {
    const initRTC = async() => {
      if(typeof window !== undefined){
       const isInitialized = await webRTCService.initialize()

         if(isInitialized !== undefined || null ){
          console.log("window is available")
         await webRTCService.makeCall()
         }
      }
    };
    initRTC();
  }, []);
  return (
    <div className="w-screen h-screen bg-red-300 flex justify-center items-center">
      <button className="w-32 h-15 bg-black text-white">Connect</button>
    </div>
  );
}
