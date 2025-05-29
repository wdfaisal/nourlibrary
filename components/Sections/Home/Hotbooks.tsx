import React from "react";
import Image from "next/image";
import book1 from '@/public/assets/book5.webp'
import book2 from '@/public/assets/book2.webp'
import { Link } from "lucide-react";
import books from "@/constants/books"
import eye from "@/public/assets/eye.svg"



function Hotbooks(props: any) {
   
    return (
      <div className='max-container flex flex-col md:mt-[15] py-10 px-10 pt-5 mt-10 mb-14 items-center h-auto lg:min-h-[80vh] bg-[#F1F1F1] '>
          <div className=' flex flex-col items-start w-full justify-start gap-2 pt-5 lg:mx-5'>
              <h1 className=' text-2xl tracking-tighter text-wrap text-center font-bold lg:text-5xl text-[#0C0B10]'>الكتب الاعلى مشاهده<br/><span className='text-[#ffe695] flex fle'>إكتشف بحر الكتب </span></h1>
          </div>

        
          <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-5 items-center justify-center mt-12 '>
            {books.map((item)=>(
                <>
                <div className=' flex flex-col gap-2 rounded-md bg-white justify-center items-center w-30 lg:w-60 border-[1px] py-5 px-5'>
                  <Image className=" rounded-md md:h-[300px] h-[200px] object-cover" src={book1} width={200}alt="book"/>
                  <h1 className=' text-md md:text-lg text-center'>{item.title}</h1>
                  <p className='text-[10px] md:text-md text-start text-gray-500 mt-1 mr-1 shrink-0'>{item.description}</p>
                  <div>
                  <p className=" text-sm"><span>القسم :</span>{item.catogry}</p>
                  <p className=" text-sm">
                    <span>
                        المؤلف :
                    </span>
                    {item.catogry}
                  </p>
                  </div>
                  <button className=" mt-1 flex flex-row gap-3 border-2  rounded-md border-[#EDC33A] md:py-2 md:px-5 py-1 px-2 hover:bg-orange-300">
                  <a className=" text-sm md:text-md  " href="/bookpage">معاينه الكتاب</a>
                  <Image className="md:w-[25px] w-[15px]" src={eye} alt="eye"/>
                  </button>
  
              </div>
                </>
            ))}
              
              
              <div className=' flex flex-col rounded-md justify-center items-center w-40 bg-[#ffe695] lg:w-60 border-[1px] shadow-lg py-5 px-5'>
                  <h1 className=' text-lg md:text-xl tracking-tighter text-white'>والعديد من الاقسام الاخرى </h1>
                  <p className='text-[10px] md:text-md text-center text-white mt-1'>استكشق رونقك ومعرفتك العلميه</p>
            
              </div>
  
          
          </div>
          
          
      
      
    </div>
    )
  }
  
  export default Hotbooks