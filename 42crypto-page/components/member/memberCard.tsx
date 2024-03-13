import React from 'react'
import PersonPicture from "../../public/JoiIto.jpeg"
import Link from "next/link";

const memberCard = (props:any) => {
  return (
       <div className="space-y-2 p-10">
          <img
            alt="Kevin Esvelt"
            className="w-full h-auto rounded"
            height="300"
			src={PersonPicture.src}
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          <Link href={"#"} className="hover:text-blue-500 text-lg font-semibold">{props.name}</Link>
          <p className="text-sm text-gray-600">{props.description}</p>
        </div>
  )
}

export default memberCard