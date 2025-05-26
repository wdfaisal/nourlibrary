"use client"

import React, { useEffect, useState } from 'react'
import BooksApi from "@/_utils/BooksApi"
import { books2 } from "@/consts/index"
import { type ClassValue } from 'clsx';
import book2 from '@/public/assets/book2.webp';


        

function books() {
  const [getbooks,setbooks]= useState();


  useEffect(()=>{
    getlastbooks();

  },[])

  const getlastbooks = ()=>{
    BooksApi.getLatestBooks().then(res=>{
      console.log(res.data)
      setbooks(res.data.data)
    })
    


  }
  return (
    <div className=' h-[100vh] flex justify-center items-center'>
      <Booklist props= {books2} />

      {books2.map((item) =>(
        <p>{item.name}</p>

      ))}

      books
      
    </div>
  )
}

function Booklist(props : any ){

  return(
    <div className=' flex flex-row w-full '>


    </div>

  )
    
}

export default books