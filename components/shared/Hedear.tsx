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
import CartDrawer from '../CartDrawer'
import { UserButton, useUser } from '@clerk/nextjs'


const loadingStates = [
  {
    text: "أرفع كتابك ",
  },
  {
    text: "اسأل",
  },
  {
    text: "ناقش ",
  },
  {
    text: "حاور ",
  },
  {
    text: "لخص",
  },
  {
    text: "مع الذكاء الصناعي",
  },
  {
    text: "بسيطة صااااح",
  },
 
];


function Hedear() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handelclick =()=>{
    setLoading (true);
    setTimeout(()=>{setLoading(false); router.replace('https://ai-pdf-notes-nine.vercel.app/')},16000)
  }

  const {user} =useUser()

 
 
  return (
    <>
      <nav className='max-container-extra bg-white border-b-2 md:gap-3 fixed md:right-32 z-50 w-full py-5 flex items-center justify-between px-7   '>

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
          <Image className=' rounded-lg w-[5] h-[5]' src={ logo_icon} alt='logo_icon ' width={40} height={15}></Image>
          <div>
            <Link href='/' className=' text-[10px] md:text-[1em] font-semibold text-[#0C0B10]'>مكتبة نور العلم </Link>
            <p className=' text-[8px] md:text-[10px]'>كل المعرفه في مكان واحد</p>
          <p></p>
          </div>
        </div>

        <div className=' hidden w-[40%] md:flex items-center justify-start'>
          <NavMenu/>
        </div>
        

        <div className=' flex flex-row md:gap-6 gap-2 z-50 '>
  
          <div className=' flex flex-row items-center justify-center'>
            {!user && 
            <Link href='/sign-in' className=' hidden md:flex border-b-2 p-3 text-sm rounded-md text-[#0C0B10]'>تسجيل الدخول</Link>
            }
            <div className=' hidden md:flex'>
            <UserButton />
            </div>

          </div>
                    
          <button onClick={handelclick} className='hover:bg-[#0C0B10] hover:border-[#0C0B10] font-bold bg-white border-[#ffe695] border-[1px] text-[#ffd447] py-2 px-4 py rounded-lg shadow-sm text-sm'>
            ملخصاتك بذكاء
          </button>
          <button>
            <Image className=' hidden md:flex' src={search} alt='search_icon' width={20}/>
          </button>
          <div className='md:hidden flex justify-center '>
            <CartDrawer />
          </div>

          
        </div>

      
      </nav>
    </>
  )
};

export default Hedear