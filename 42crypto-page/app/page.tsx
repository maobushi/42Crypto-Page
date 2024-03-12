import Image from "next/image";
import Navbar from "../components/navbar";
import HomePicture from "../components/home-picture";
import React from 'react'
import { InitiativeList } from "@/components/initiativeList";
import BlockchainPicture from "../public/BlockchainPicture.jpeg"
import CommonComponent from "../components/CommonComponent";
import HomeMenu from "../components/HomeMenu";

const page = () => {
  return (
    <div >
    <CommonComponent />
    <InitiativeList />
    </div>
  )
};
export default page