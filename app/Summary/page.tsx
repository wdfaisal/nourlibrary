"use client"
import React from 'react'
import Hedear from '@/components/shared/Hedear'
import  {motion }from 'framer-motion';

function page() {
  return (
    <>
   <Hedear/>
   <section className='first-letter:w-full md:h-[100vh] h-[120vh] pt-72 flex flex-col items-center justify-center'>
       <motion.div
        initial={{opacity:0, y:10}}
        animate={{opacity:100 ,y:0}}
        transition={{duration:1 ,delay:0 }} 
       
       className='max-container flex flex-col md:mt-[30px] py-0 items-center lg:min-h-[80vh]'>
           <div className=' flex flex-col items-center justify-center gap-2 -mt-20 lg:mx-5'>
               <h1 className=' text-3xl tracking-tighter text-wrap text-center font-bold lg:text-6xl text-[#0C0B10]'>لخص كتابك بكل بسااااطة !<br/><span className='text-[#ffe695]'>مدعوم بالذكاء الاصطناعي </span></h1>
               <p className=' text-gray-500 text-md mt-1'>ارفق ملف ال pdf الخاص بك</p>
           </div>
           <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 md:gap-3 lg:gap-5 items-center justify-center mt-12  mr-3'>
               <div className=' flex flex-col rounded-md justify-center items-center cursor-pointer hover:bg-yellow-500 w-40 lg:w-96 border-[1px] py-5 px-5'>
                   <h1 className=' text-lg md:text-xl'>ارفع كتابك </h1>
                   <p className='text-[10px] md:text-md text-center text-gray-500 mt-1'>ملف pdf </p>
   
               </div>
              
           
           </div>
           
           
       
       
     </motion.div>
   
       </section>
    

    






    </>
  )
}

export default page