"use client"
import React from 'react'
import Hedear from '@/components/shared/Hedear'
import book from "@/public/assets/book5.webp"
import Image from 'next/image';
import  {motion }from 'framer-motion';

function page() {
    const pdfurl = "https://nourlibrary.vercel.app//Noor-Book.pdf"
   
  return (
    <>
   <section className='first-letter:w-full md:h-[100vh] h-[120vh] flex flex-row items-center justify-center gap-5'>
       
       <div className='w-1/4'>
        <Image src={book} alt='book'></Image>

       </div>
       <div className=' flex flex-col justify-start gap-3 '>
        <h1 className='text-3xl font-medium'> 250 تقنية في التلاعب النفسي</h1>
        <p>مؤلف:	لمى فياض</p>
        <p>اللغة:	العربية</p>
        <p>الصفحات:	36</p>
        <p>حجم الملف:	1.3 ميجا بايت</p>
        <p>نوع الملف:	PDF</p>
        <p>تاريخ الإنشاء:	19 أغسطس 2021</p>
        <div>
            <button  className=' border-r-2 border-r-orange-400 py-2 px-5 mt-3 hover:bg-orange-500'>
                <a  href={pdfurl} download={pdfurl}> تحميل</a>
            </button>
            <button  className=' border-r-2 border-r-orange-400 py-2 px-5 mt-3 hover:bg-orange-500'>
                <a  href="https://ai-pdf-notes-nine.vercel.app/" > تطبيق ملخصاتي</a>
            </button>
        </div>
       </div>
       </section>
    

    






    </>
  )
}

export default page