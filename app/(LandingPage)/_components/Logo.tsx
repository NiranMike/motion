import React from 'react'
import Image from 'next/image'
import {  Monofett } from "next/font/google"

import { cn } from '@/lib/utils'



const Monofet = Monofett({
    subsets: ["latin"],
    weight: ["400"]
})


const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-1'>
        <Image 
         src={"/logo(white).png"}
         height={"40"}
         width={"40"}
         alt='Logo'
         className='dark:hidden'
        />
        <Image 
         src={"/logo(dark).png"}
         height={"40"}
         width={"40"}
         alt='Logo'
         className='hidden dark:block'
        />
        <p className={cn("font-semibold", Monofet.className)}>
            Motion
        </p>
    </div>
  )
}

export default Logo