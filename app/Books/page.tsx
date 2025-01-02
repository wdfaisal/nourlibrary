import React from 'react'
import BooksApi from '@/_utils/BooksApi'
import CartDrawer from '@/components/CartDrawer'

function books() {
    const getlatestbooks = ()=> {
        BooksApi.getLatestBooks().then(res=>{
            
        })
    }
  return (
    <div className=' h-[100vh] flex justify-center items-center'>
      books
      <CartDrawer/>
    </div>
  )
}

export default books