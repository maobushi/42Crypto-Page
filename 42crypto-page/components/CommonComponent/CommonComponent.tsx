import React from 'react'
import Image from "next/image";
import Navbar from "./navbar";
import HomeMenu from "./HomeMenu";
import BlockchainPicture from "../../public/BlockchainPicture.jpeg"


const CommonComponent = () => {
  return (
	<div>
    <Navbar />
    <Image src={BlockchainPicture} alt="Sample Top Page Image" layout="responsive"  objectFit="contain" />
    <HomeMenu />
    </div>
  )
}

export default CommonComponent