"use client"
import React from 'react'
import Hedear from '@/components/shared/Hedear'
import  {motion }from 'framer-motion';

function page() {
  return (
    <>
   <Hedear/>
    <section className='w-full md:h-[150vh] h-[120vh] pt-5 flex flex-col items-center justify-center'>
    <motion.div
     initial={{opacity:0, y:10}}
     animate={{opacity:100 ,y:0}}
     transition={{duration:1 ,delay:0 }} 
    
    className='max-container flex flex-col md:mt-[-10] py-0 items-center lg:min-h-[80vh]'>
        <div className=' flex flex-col items-center justify-center gap-2 -mt-20 lg:mx-5'>
            <h1 className=' text-3xl tracking-tighter text-wrap text-center font-bold lg:text-6xl text-[#0C0B10]'>اكتشف عالماً من المعرفة<br/><span className='text-[#ffe695]'>اقسام مكتبتنا الإلكترونية</span></h1>
            <p className=' text-gray-500 text-md mt-1'>اكثر من 12الف كتاب من مختلفه المجالات</p>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5 items-center justify-center mt-12  mr-3'>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px] py-5 px-5'>
                <h1 className=' text-lg md:text-xl'>كتب البرمجة</h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1'>يشمل لغات البرمجة الحديثة، تطوير التطبيقات، الذكاء الاصطناعي البرمجي، وأدوات البرمجة الحديثة. </p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px]  py-5 px-5'>
                <h1 className=' text-lg md:text-xl'>كتب الصحة النفسية </h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1'>قسم مخصص للكتب التي تركز على الصحة النفسية، التوازن بين العمل والحياة، والعافية العامة. </p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px] shadow-sm py-5 px-5'>
                <h1 className=' text-lg md:text-xl'>كتب العلوم الاجتماعية </h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>تغطي مواضيع مثل التحليل الاجتماعي، التأثيرات الرقمية على المجتمع، وموضوعات تتعلق بالثقافات الحديثة.</p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px]  py-5 px-5 shadow-sm'>
                <h1 className=' text-lg md:text-xl'>قصص وروايات</h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>يعرض الكتب الأدبية الحديثة والرقمية، مثل الروايات التفاعلية التي تستخدم الوسائط المتعددة.</p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px] shadow-sm py-5 px-5'>
                <h1 className=' text-lg md:text-xl'>كتب الابتكار وريادة الأعمال</h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>يركز على كتب الابتكار، أفكار المشاريع الناشئة، كيفية بدء المشاريع الصغيرة وتوسيعها باستخدام أساليب حديثة.</p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 bg-[#ffe695] lg:w-60 border-[1px] shadow-lg py-5 px-5'>
                <h1 className=' text-lg md:text-xl tracking-tighter text-white'>والعديد من الاقسام الاخرى </h1>
                <p className='text-[10px] md:text-md text-center text-white mt-1'>استكشق رونقك ومعرفتك العلميه</p>

            </div>

        
        </div>
        
        
    
    
  </motion.div>

    </section>


    






    </>
  )
}

export default page