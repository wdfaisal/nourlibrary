'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import search from "@/public/assets/search.webp"
import logo_icon from "@/public/assets/noor_icon.jpg"
import Image from 'next/image';
import NavMenu from './NavMenu';
import  { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { useRouter } from 'next/navigation'
import DarkModeButton from "@/components/ui/DarkModeButton"


const loadingStates = [
  {
    text: "Enter your company info",
  },
  {
    text: "Selact your tools",
  },
  {
    text: "Meeting The mantour",
  },
  {
    text: "Install it in your pc",
  },
  {
    text: "Start automation",
  },
  {
    text: "Congratlation all done",
  },
  {
    text: "You wiil be redairct now",
  },
 
];


function Hedear() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handelclick =()=>{
    setLoading (true);
    setTimeout(()=>{setLoading(false); router.replace('/Docs')},17000)
  }


 
 
  return (
    <>
      <nav className='max-container-extra border-b-2 fixed md:right-32 z-50 w-full py-5 flex items-center justify-between px-7   '>

          <div className=" absolute">
              {/* Core Loader Modal */}
              <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

              {loading && (
                <button
                  className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                  onClick={() => setLoading(false)}
                >
                  <IconSquareRoundedX className="h-10 w-10" />
                </button>
              )}
        </div>

        <div className=' flex flex-row gap-2'>
          <Image className=' rounded-lg md:w-[50] md:h-[50]' src={ logo_icon} alt='logo_icon ' width={50} height={25}></Image>
          <div>
            <Link href='/' className=' text-[1.1em] font-semibold text-[#0C0B10]'>مكتبة نور العلم </Link>
            <p>كل المعرفه في مكان واحد</p>
          <p></p>
          </div>
        </div>

        <div className=' hidden w-[40%] md:flex items-center justify-start'>
          <NavMenu/>
        </div>
        

        <div className=' flex flex-row gap-5 z-50 '>
          <DarkModeButton/>
          <button onClick={handelclick} className='hover:bg-[#0C0B10] hover:border-[#0C0B10] font-bold bg-white border-[#ffe695] border-[1px] text-[#ffd447] py-2 px-3 rounded-lg shadow-sm text-sm'>
            ملخصاتك بذكاء
          </button>
          <button>
            <Image src={search} alt='search_icon' width={20}/>
          </button>
        </div>

      
      </nav>
    </>
  )
};

export default Hedear