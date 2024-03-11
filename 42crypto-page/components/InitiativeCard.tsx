import React from 'react'

const InitiativeCard = (props:any) => {
  return (
	
	<a className="block p-4 bg-white shadow rounded-lg" href="#">
        <img
          alt=""
          className="h-20 w-60"
          height="50"
          src={props.image}
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width="50"
        />
        <h2 className="mt-2 text-xl font-semibold">{props.name}</h2>
        <p className="mt-2 text-gray-500">
          {props.description}
        </p>
        <p className="mt-4 text-sm text-gray-600">{props.directorname}</p>
        <p className="text-sm text-gray-500">{props.hashtag}</p>
      </a>
  )
}

export default InitiativeCard