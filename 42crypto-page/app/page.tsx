import Image from "next/image";
import Navbar from "../components/CommonComponent/navbar";
import HomePicture from "../components/CommonComponent/home-picture";
import React from 'react'
import { InitiativeList } from "@/components/CommonComponent/initiativeList";
import BlockchainPicture from "../public/BlockchainPicture.jpeg"
import CommonComponent from "../components/CommonComponent/CommonComponent";
import HomeMenu from "../components/CommonComponent/HomeMenu";
import Footer from "../components/CommonComponent/footer";
const page = () => {
  return (
    <div >
    <CommonComponent />
    <InitiativeList />
    <Footer />
    </div>
  )
};
export default page