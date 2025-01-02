"use client"

import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import photo1  from "@/public/assets/menu-svg.png"
  import { UserButton, useUser } from '@clerk/nextjs'
  import Image from "next/image"
  import { ScrollArea } from '@radix-ui/react-scroll-area'
  import { Link } from 'lucide-react'


function CartDrawer() {
    const {user} =useUser()
  return (
    <Drawer>

        <DrawerTrigger>
          <Image className=' border-2 border-[#ffe695] rounded-md' src={photo1} alt='menu' width={40} height={40}/>
          
        </DrawerTrigger>

        <DrawerContent className=" items-center" dir="rtl">

            <DrawerHeader dir="rtl" className=" justify-center" >
                 <DrawerTitle className=' text-center'>القائمة</DrawerTitle>
                 <DrawerDescription>أكتشف عالم جديد من المعرفه</DrawerDescription>
            </DrawerHeader>

            <div dir='rtl' className=' max-h-52 w-[95%] overflow-y-scroll' >
                
                <button className=" flex gap-5 items-center max-h-60 w-32 mx-10 my-5 border-b-2 py-3 px-10">
                    <p className=' text-xl font-bold '>اقسام المكتبة </p>
                    
                </button>
              
                <button className=" flex gap-5 items-center max-h-60 mx-10 my-5 border-b-2 py-3 px-10">
                    <p className=' text-xl font-bold '>اقسام المكتبة </p>
                    
                </button>
              
                <button className=" flex gap-5 items-center max-h-60 mx-10 my-5 border-b-2 py-3 px-10">
                    <p className=' text-xl font-bold '>اقسام المكتبة </p>
                    
                </button>
                <button className=" flex gap-5 items-center max-h-60 mx-10 my-5 border-b-2 py-3 px-10">
                    <p className=' text-xl font-bold '>اقسام المكتبة </p>
                    
                </button>
              
        
            </div>
    
            <DrawerFooter>
              
                <div className=' flex flex-row border-[1px] w-72 py-2 px-10 rounded-xl'>
                { user &&
                <>
                  <div>
                    <p className=' text-xl '>{user.fullName}</p>
                  </div>

                  <div>
                    <UserButton/>
                  </div>
                </>
                }
                {!user&&
                <div className=' flex justify-center items-center'>
                  <a className=' text-center text-md '>تسجيل الدخول </a>

                </div>
                
                }
                </div>
                
                <DrawerClose>
                    <button className='border-[1px] w-72 py-2 px-10 mt-5  bg-black text-white text-md font-bold rounded-xl'>إغلاق</button>
                </DrawerClose>

            </DrawerFooter>
    </DrawerContent>
  </Drawer>
  
  )
}

export default CartDrawer