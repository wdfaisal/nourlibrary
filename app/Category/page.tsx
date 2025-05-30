"use client"
import React from 'react'
import Hedear from '@/components/shared/Hedear'
import  {motion }from 'framer-motion';
import book from "@/public/assets/book5.webp"
import books from "@/constants/books"
import eye from "@/public/assets/eye.svg"
import Image from 'next/image';

function page() {
  return (
    <>
    <section className='w-full md:h-[70vh]  h-[70vh] md:pt-[500px] flex flex-col items-center justify-center'>
        <motion.div
        initial={{opacity:0, y:10}}
        animate={{opacity:100 ,y:0}}
        transition={{duration:1 ,delay:0 }} 
        className='max-container flex flex-col md:mt-[-10] py-0 items-center lg:min-h-[80vh]'>

            <div className=' flex flex-col items-center justify-center gap-2 -mt-20 lg:mx-5'>
                <h1 className=' text-3xl tracking-tighter text-wrap text-center font-bold lg:text-6xl text-[#0C0B10]'>اكتشف عالماً من المعرفة<br/><span className='text-[#ffe695]'>اقسام مكتبتنا الإلكترونية</span></h1>
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


            
            </div>
            
            
        
        
    </motion.div>

    </section>
    <section className='max-container flex flex-col md:mt-[15] py-10 px-10 pt-5 mt-10 mb-14 items-center h-auto lg:min-h-[80vh]'>
        <div className=' flex flex-row items-start w-full justify-between gap-2 pt-5 lg:mx-14'>
                      <h1 className=' text-2xl tracking-tighter text-wrap text-center font-bold lg:text-5xl text-[#0C0B10]'>كتب العلوم<br/></h1>
                      <button>
                        <a className=' text-md font-medium hover:text-orange-300'> إطلع على القسم ~</a>
                      </button>
                  </div>
        
                
                  <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-5 items-center justify-center mt-12 '>
                    {books.map((item)=>(
                        <>
                        <div className=' flex flex-col gap-2 rounded-md bg-white justify-center items-center w-30 lg:w-60 border-[1px] py-5 px-5'>
                            <Image className='rounded-md md:h-[300px] h-[200] object-cover' src={book} alt='book' width={200}/>
                          <h1 className=' text-md md:text-lg text-center'>{item.title}</h1>
                          <p className='text-[9px] md:text-md text-start text-gray-500 mt-1 mr-1 shrink-0'>{item.description}</p>
                          <div>
                          <p className=" text-sm"><span>القسم :</span>{item.catogry}</p>
                          <p className=" text-sm">
                            <span>
                                المؤلف :
                            </span>
                            {item.catogry}
                          </p>
                          </div>
                          <button className=" mt-1 flex flex-row gap-3 border-2  rounded-md border-[#EDC33A] py-2 px-5 hover:bg-orange-300">
                          <a className="  " href="/bookpage">معاينه الكتاب</a>
                          <Image src={eye} width={25} alt="eye"/>
                          </button>
          
                      </div>
                        </>
                    ))}
                      
                      
                      <div className=' flex flex-col rounded-md justify-center items-center w-40 bg-[#ffe695] lg:w-60 border-[1px] shadow-lg py-5 px-5'>
                          <h1 className=' text-lg md:text-xl tracking-tighter text-white'>والعديد من الاقسام الاخرى </h1>
                          <p className='text-[10px] md:text-md text-center text-white mt-1'>استكشق رونقك ومعرفتك العلميه</p>
                    
                      </div>
          
                  
                  </div>

    </section>
    <section className='max-container flex flex-col md:mt-[15] py-10 px-10 pt-5 mt-10 mb-14 items-center h-auto lg:min-h-[80vh]'>
        <div className=' flex flex-row items-start w-full justify-between gap-2 pt-5 lg:mx-14'>
                      <h1 className=' text-2xl tracking-tighter text-wrap text-center font-bold lg:text-5xl text-[#0C0B10]'>كتب الروايات<br/></h1>
                      <button>
                        <a className=' text-md font-medium hover:text-orange-300'> إطلع على القسم ~</a>
                      </button>
                  </div>
        
                
                  <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-5 items-center justify-center mt-12 '>
                    {books.map((item)=>(
                        <>
                        <div className=' flex flex-col gap-2 rounded-md bg-white justify-center items-center w-30 lg:w-60 border-[1px] py-5 px-5'>
                            <Image className='rounded-md md:h-[300px] h-[200] object-cover' src={book} alt='book' width={200}/>
                          <h1 className=' text-md md:text-lg text-center'>{item.title}</h1>
                          <p className='text-[9px] md:text-md text-start text-gray-500 mt-1 mr-1 shrink-0'>{item.description}</p>
                          <div>
                          <p className=" text-sm"><span>القسم :</span>{item.catogry}</p>
                          <p className=" text-sm">
                            <span>
                                المؤلف :
                            </span>
                            {item.catogry}
                          </p>
                          </div>
                          <button className=" mt-1 flex flex-row gap-3 border-2  rounded-md border-[#EDC33A] py-2 px-5 hover:bg-orange-300">
                          <a className="  " href="/bookpage">معاينه الكتاب</a>
                          <Image src={eye} width={25} alt="eye"/>
                          </button>
          
                      </div>
                        </>
                    ))}
                      
                      
                      <div className=' flex flex-col rounded-md justify-center items-center w-40 bg-[#ffe695] lg:w-60 border-[1px] shadow-lg py-5 px-5'>
                          <h1 className=' text-lg md:text-xl tracking-tighter text-white'>والعديد من الاقسام الاخرى </h1>
                          <p className='text-[10px] md:text-md text-center text-white mt-1'>استكشق رونقك ومعرفتك العلميه</p>
                    
                      </div>
          
                  
                  </div>

    </section>


    






    </>
  )
}

export default page