import React from "react";
import Image from "next/image";
import book1 from '@/public/assets/book1.webp'
import book2 from '@/public/assets/book2.webp'


function Hotbooks() {
    return (
      <div className='max-container flex flex-col md:mt-[15] py-10 px-10 pt-5 mt-10 items-center h-auto lg:min-h-[80vh] bg-[#F1F1F1] '>
          <div className=' flex flex-col items-start w-full justify-start gap-2 pt-5 lg:mx-5'>
              <h1 className=' text-2xl tracking-tighter text-wrap text-center font-bold lg:text-5xl text-[#0C0B10]'>اكتشف الكتب الاكثر مشاهدة<br/><span className='text-[#ffe695]'>اقسام مكتبتنا الإلكترونية</span></h1>
              <p className=' text-gray-500 text-md mt-1'>اكثر من 12الف كتاب من مختلفه المجالات</p>
          </div>
          <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-5 items-center justify-center mt-12 '>
              <div className=' flex flex-col gap-2 rounded-md bg-white justify-center items-center w-30 lg:w-60 border-[1px] py-5 px-5'>
                  <Image src={book1} alt="book"/>
                  <h1 className=' text-lg md:text-xl'>كتب البرمجة</h1>
                  <p className='text-[10px] md:text-md text-center text-gray-500 mt-1'>يشمل لغات البرمجة الحديثة، تطوير التطبيقات، الذكاء الاصطناعي البرمجي، وأدوات البرمجة الحديثة. </p>
  
              </div>
              <div className=' flex flex-col gap-2 bg-white rounded-md justify-center items-center w-30 lg:w-60 border-[1px]  py-5 px-5'>
                  <Image src={book2} alt="book"/>
                  <h1 className=' text-lg md:text-xl'>كتب النفسية </h1>
                  <p className='text-[10px] md:text-md text-center text-gray-500 mt-1'>قسم مخصص للكتب التي تركز على الصحة النفسية، التوازن بين العمل والحياة، والعافية العامة. </p>
  
              </div>
              <div className=' flex flex-col rounded-md bg-white justify-center items-center w-30 lg:w-60 border-[1px] shadow-sm py-5 px-5'>
              <Image src={book1} alt="book"/>
                  <h1 className=' text-lg md:text-xl'>كتب العلوم</h1>
                  <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>تغطي مواضيع مثل التحليل الاجتماعي، التأثيرات الرقمية على المجتمع، وموضوعات تتعلق بالثقافات الحديثة.</p>
  
              </div>
              <div className=' flex flex-col rounded-md bg-white justify-center items-center w-30 lg:w-60 border-[1px]  py-5 px-5 shadow-sm'>
              <Image src={book2} alt="book"/>
                  <h1 className=' text-md md:text-xl'>قصص وروايات</h1>
                  <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>يعرض الكتب الأدبية الحديثة والرقمية، مثل الروايات التفاعلية التي تستخدم الوسائط المتعددة.</p>
  
              </div>
              <div className=' flex flex-col rounded-md bg-white justify-center items-center w-30 lg:w-60 border-[1px] shadow-sm py-5 px-5'>
              <Image src={book2} alt="book"/>
                  <h1 className=' text-lg md:text-xl'> وريادة الأعمال</h1>
                  <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>يركز على كتب الابتكار، أفكار المشاريع الناشئة، كيفية بدء المشاريع الصغيرة وتوسيعها باستخدام أساليب حديثة.</p>
  
              </div>
              <div className=' flex flex-col rounded-md justify-center items-center w-40 bg-[#ffe695] lg:w-60 border-[1px] shadow-lg py-5 px-5'>
                  <h1 className=' text-lg md:text-xl tracking-tighter text-white'>والعديد من الاقسام الاخرى </h1>
                  <p className='text-[10px] md:text-md text-center text-white mt-1'>استكشق رونقك ومعرفتك العلميه</p>
  
              </div>
  
          
          </div>
          
          
      
      
    </div>
    )
  }
  
  export default Hotbooks