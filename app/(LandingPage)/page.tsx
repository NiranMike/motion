import React from 'react'
import Header from './_components/Header'
import Hero from './_components/Hero'
import Footer from './_components/Footer'

const LandingPage = () => {
  return (
    <div className='min-h-full bg-blue-400 dark:bg-[#1f1f1f]  flex flex-col'>
        <div className="flex px-6 pb-10 flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1">
            <Header />
            <Hero />
        </div>
        <Footer />
    </div>
  )
}

export default LandingPage