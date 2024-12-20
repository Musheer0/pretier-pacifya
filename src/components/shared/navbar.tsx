"use client"
import React from 'react'
import { ModeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname()
if(pathname!=='/login')
  return (
    <>
    <div className="banner text-center bg-gradient-to-r from-primary to-primary-foreground">
              Members only access (Your a memeber)
            </div>
    <nav className="w-full flex items-center justify-between border-b p-2">
    <div className="logo">
    <img src='https://online.staloysius.edu.in/storage/settings/1706691046_LogoBLACK%20(1).png' className='w-[60px] '/> 
    </div>
    <div className="actions flex h-full items-center">
      <ModeToggle/>
    </div>
   </nav>
    </>
  )
}

export default Navbar