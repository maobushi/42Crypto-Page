import React from 'react'
import Image from "next/image";

import BlockchainPicture from "../public/BlockchainPicture.jpeg"


const HomePicture = () => {
  return (
		<div className="fixed h-screen w-screen -z-50">
        <Image
          src={BlockchainPicture}
          alt="猫は最高に可愛い"
          className="object-cover"
          quality={100}
          sizes="100vw"
          fill

        />
		</div>
  )
}

export default HomePicture