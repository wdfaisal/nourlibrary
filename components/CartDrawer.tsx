import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import photo1  from "@/public/assets/design3.png"
  import cart from '@/public/assets/cart.png'
  import Image from "next/image"
  import { ScrollArea } from '@radix-ui/react-scroll-area'


function CartDrawer() {
  return (
    <Drawer>

        <DrawerTrigger>
          <Image src={cart} alt='cart' width={32} height={32}/>
        </DrawerTrigger>

        <DrawerContent className=" items-center" dir="rtl">
            <DrawerHeader dir="rtl" className=" justify-center" >
                 <DrawerTitle className=' text-center'>عربة المشتريات</DrawerTitle>
                 <DrawerDescription>اجمع كل خدماتك هنا لإتمام عملية الشراء</DrawerDescription>
            </DrawerHeader>
            <ScrollArea dir='rtl' className=' h-1/2 lg:w-2/3' >
                <div className=" flex gap-5 items-center max-h-60 mx-20 my-5 border-b-2 py-3 px-3">
                    <Image src={photo1} alt='hero' width={50} height={80} />
                    <div >
                    <h2 className=" lg:text-xl text-md font-semibold ">خدمة تسويق ميديا حسابات لمدة سنه  </h2>
                    <p className=' text-sm line-clamp-2'>خدمة تسويق الكترونيه لمدة سنه تسويق حسابات تسويق عبر مختلف المنصات التواصل الاجتماعي</p>
                    </div>
                    <p>100 KWD</p>
                    
                </div>
              
        
            </ScrollArea>
    
            <DrawerFooter>
                <button className=" text-xl">إتمام عمليه الدفع</button>
                <DrawerClose>
                    <button>إغلاق</button>
                </DrawerClose>

            </DrawerFooter>
    </DrawerContent>
  </Drawer>
  
  )
}

export default CartDrawer