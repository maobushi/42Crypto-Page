import React from 'react'
import Link from 'next/link'
const HomeMenu = () => {
  return (
<nav className="flex justify-between max-w-4xl mx-auto p-10">
      <Link className="text-lg hover:text-blue-400 font-semibold hover:text-gray-700 text-[#bd1e59] hover:text-[#a3184b]" href="#">
        Initiatives
      </Link>
      <Link className="text-lg hover:text-blue-400 font-semibold hover:text-gray-700" href="#">
        Research Themes
      </Link>
      <Link className="text-lg hover:text-blue-400 font-semibold " href="#">
        Projects
      </Link>
      <Link className="text-lg hover:text-blue-400 font-semibold hover:text-gray-700" href="#">
        Publications
      </Link>
    </nav>
  )
}

export default HomeMenu