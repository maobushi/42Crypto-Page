import Image from "next/image";
import Navbar from "../components/navbar";
import HomePicture from "../components/home-picture";
import React from 'react'
import { InitiativeList } from "@/components/initiativeList";
import BlockchainPicture from "../public/BlockchainPicture.jpeg"

import HomeMenu from "../components/HomeMenu";

const page = () => {
  return (
    <div className="w-full justify-center items-center h-screen ">

    <Navbar />
 
    <Image src={BlockchainPicture} alt="Sample Top Page Image" layout="responsive"  objectFit="contain" />

    <HomeMenu />
    <InitiativeList />

    </div>

  )
};
export default page