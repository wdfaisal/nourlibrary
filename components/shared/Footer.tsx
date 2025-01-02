
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Contarbraturs from "@/components/shared/Contributors"
import logo_icon from '@/public/assets/noor_icon.jpg';

const Footer = () => {
  return (
    <footer className=" text-white bg-[#0C0B10] justify-between min-h-[100vh]  md:min-h-[60vh] w-full flex flex-col  ">
      <div className='md:h-2/3 lg:flex grid grid-cols-2 gap-10 lg:flex-row md:items-start  justify-center my-auto md:mx-20 mx-auto '>

        <div className=' flex flex-col  gap-2 items-start font-bold font-sans mx-auto '>
          <div className=' flex flex-row gap-2 items-center'>
          <Image src={logo_icon} className=' rounded-md' alt='logoicon 'width={35} height={25}/>
          <h1 className='text-xl font-bold tracking-tighter'>مكتبة نور العلم</h1>
          </div>
          <p className='pl-1 text-gray-300 md:text-[10px] text-[8px] font-sans leading-4 md:w-56 w-40'> مكتبة الكترونيه تحتوي على العديد من الكتب من مختلف المجالات بدعم من الذكاء الاصطناعي لتسهيل عمليه القارئه</p>
        </div>

        <div className=' h-full mx-auto '>
          <p className=' font-bold mb-2'>أقسام المكتبة </p>
          <ul className=' flex flex-col gap-1'>
            <li className=' text-gray-300 text-sm font-sans'>كتب البرمجه</li>
            <li className=' text-gray-300 text-sm font-sans'>كتب علم النفس </li>
            <li className=' text-gray-300 text-sm font-sans'>كتب ادبيه </li>
            <li className=' text-gray-300 text-sm font-sans'>روايات </li>
          </ul>
        </div>

        <div className=' h-full mx-auto text'>
          <p className=' font-bold mb-2'>أدوات الذكاء الاصطناعي</p>
          <ul className=' flex flex-col gap-1'>
            <li className=' text-gray-300 text-sm font-sans'>تلخيص المقالات </li>
            <li className=' text-gray-300 text-sm font-sans'>ناقش كتابك مع الذكاء الاصطناعي</li>
            <li className=' text-gray-300 text-sm font-sans'>لخص مقالك</li>
            <li className=' text-gray-300 text-sm font-sans'>اقتراح كتاب للقرائه</li>
           
          </ul>
        </div>

        <div className=' h-full mx-auto text'>
          <p className=' font-bold mb-2'>من نحن</p>
          <ul className=' flex flex-col gap-1'>
            <li className=' text-gray-300 text-sm font-sans'>الحقوق</li>
            <li className=' text-gray-300 text-sm font-sans'>اللوائح والقوانين</li>
            <li className=' text-gray-300 text-sm font-sans'>المصادر والمراجع</li>
          </ul>
        </div>

        <div className=' hidden md:grid  h-full  '>
          <p className=' font-bold mb-10 uppercase'>المطورين</p>
          <Contarbraturs/>
        </div>

        
      </div>
      <div className='md:hidden h-full  '>
          <p className=' font-bold mb-10 ml-10 uppercase'>المطورين</p>
          <Contarbraturs/>
        </div>
      <div className=' py-5 px-5 border-t-[1px] border-gray-400 w-full'>
        <p> مشروع تخرج لنيل درجه البكلريوس في علوم الحاسب</p>
        <p className=' text-[14px] text-gray-300 font-sans'>©2024 all rights reserved <Link href="/" className=' text-[#fffeb7]'>مكتبة نور العلوم </Link></p>
      </div>

    
    </footer>
  )
  }
export default Footer