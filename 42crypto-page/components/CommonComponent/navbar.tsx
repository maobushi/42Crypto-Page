"use client"
import { useEffect, useState } from 'react'

import FtLogo from '/public/42logo.svg';
export default function Navbar() {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 0) {
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      };

      // スクロールイベントを監視
      window.addEventListener('scroll', handleScroll);

      // コンポーネントのアンマウント時にイベントリスナーを削除
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`py-4 px-8 fixed top-0 flex w-full z-50 items-center justify-between ${isScrolled ? 'bg-white' : 'bg-transparent backdrop-blur-md'}`}>
      <div className="flex items-center space-x-4">
        {/*<img
          alt="Logo"
          className="h-10 w-10"
          height="40"
          src="/42logo.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />*/}

        <FtIcon className="h-16 w-16 text-white" color ={`${isScrolled? 'black':'white'}`}/>
        <span className={`font-bold text-lg ${isScrolled ? 'text-black' : 'text-white'}`}>Crypto</span>
      </div>
      <div className="flex items-center space-x-6">
        <UserIcon className="h-6 w-6 text-white" color ={`${isScrolled? 'black':'white'}`}/>
        <SearchIcon className="h-6 w-6 text-white" color ={`${isScrolled? 'black':'white'}`}/>
        <MenuIcon className="h-6 w-6 text-white" color ={`${isScrolled? 'black':'white'}`}/>
      </div>
    </nav>
  )
}

function FtIcon(props: any) {
  return(
    <svg
      {...props}
      width="1920" // 幅を1920に変更しました
      height="1920" // 高さを1920に変更しました
      viewBox="0 -200 960 960"
      fill={props.color} // SVG全体のfillを指定
    >
      <polygon points="32,412.6 362.1,412.6 362.1,578 526.8,578 526.8,279.1 197.3,279.1 526.8,-51.1 362.1,-51.1   32,279.1" />
      <polygon points="597.9,114.2 762.7,-51.1 597.9,-51.1" />
      <polygon points="762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1" />
      <polygon points="928,279.1 762.7,443.9 928,443.9" />
    </svg>
  );
}


function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color} // 色を黒に変更しました
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color} // 色を黒に変更しました
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color} // 色を黒に変更しました
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

