"use client"
import React from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
const HomeMenu = () => {
	const pathname = usePathname()
	console.log("pathname:",pathname)
  return (
<nav className="flex justify-between max-w-3xl mx-auto p-10">
      <Link href="/" className={`text-lg font-semibold ${pathname === "/" ? "text-red-500" : "hover:text-blue-400"}`}>
		Initiatives
	</Link>
	<Link href="/project" className={`text-lg font-semibold ${pathname === "/project" ? "text-red-500" : "hover:text-blue-400"}`}>
		Project
	</Link>
	<Link href="/member" className={`text-lg font-semibold ${pathname === "/member" ? "text-red-500" : "hover:text-blue-400"}`}>
		Member
	</Link>
	<Link href="/publish" className={`text-lg font-semibold ${pathname === "/publish" ? "text-red-500" : "hover:text-blue-400"}`}>
		Publish
	</Link>

    </nav>
  )
}

export default HomeMenu