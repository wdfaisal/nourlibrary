
import {
  ClerkProvider,
} from '@clerk/nextjs'
import type { Metadata } from 'next'

import { Tajawal, Cairo } from 'next/font/google';

import './globals.css'
import Footer from '@/components/shared/Footer';
import Hedear from '@/components/shared/Hedear';


const tajiawal = Tajawal({
  weight: ['200','300','400','500','700'],
  subsets: ['arabic'],

})


export const metadata: Metadata = {
  title: 'Noor | نور العلم',
  description: 'تعلم بذكاء',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <ClerkProvider>
    <html lang="en" dir='rtl' >
      <body className={tajiawal.className} >
        <Hedear/>
        {children}
        <Footer/>
      </body>
      
    </html>
    </ClerkProvider>
    </>
  )
}
