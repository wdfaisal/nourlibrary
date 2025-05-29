"use client"
import React from 'react'
import book from "@/public/assets/book5.webp"
import Image from 'next/image';
import  {motion }from 'framer-motion';

function page() {
    const pdfurl = "https://nourlibrary.vercel.app//Noor-Book.pdf"
   
  return (
    <>
    <section className=' max-container  flex flex-col mx-20 w-full items-center justify-center'>
       <div className='md:h-[100vh] h-[120vh] flex md:flex-row flex-col items-center justify-around w-full md:mr-32 '>
          <div className='md:w-1/4 border-l-2 md:h-auto  '>
              <Image className=' rounded-md h-80 w-60' src={book} alt='book'></Image>
          </div>

          <div className=' flex flex-col justify-start gap-3 md:w-1/2  h-auto  '>
              <h1 className='text-3xl font-medium'> 250 تقنية في التلاعب النفسي</h1>
              <p>
                <span className=' font-medium px-1 text-lg' >المؤلف:</span>	
                 لمى فياض
              </p>
              <p>اللغة:	العربية</p>
              <p>الصفحات:	36</p>
              <p>حجم الملف:	1.3 ميجا بايت</p>
              <p>نوع الملف:	PDF</p>
              <p>تاريخ الإنشاء:	19 أغسطس 2021</p>
              <div className=' flex flex-row gap-3'>
                  <button  className=' border-2 border-r-orange-400 py-2 px-5 mt-3 hover:bg-orange-500'>
                      <a  href={pdfurl} download={pdfurl}> تحميل</a>
                  </button>
                  <button  className=' border-2 border-r-orange-400 py-2 px-5 mt-3 hover:bg-orange-500'>
                      <a  href="https://ai-pdf-notes-nine.vercel.app/" > تطبيق ملخصاتي</a>
                  </button>
              </div>
          </div>
        </div>
        <div className=' md:mt-[-100px] mb-10 md:mx-40'>
          <h2 className=' text-xl font-medium'>الوصف :</h2>
          <p>٢٥٠ تقنية سريعة ومظلمة في التلاعب النفسي و علم النفس المظلم تمّ تجميعها من العديد من كتب القوة والسلطة والتلاعب النفسي والسيطرة على الآخرين وتحقيق المآرب بكل انتهازية ووصولية. الكُتيّب هو زبدة التقنيات في التلاعب النفسي.</p>

        </div>

       </section>







    </>
  )
}

export default page