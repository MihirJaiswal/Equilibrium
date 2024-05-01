import Footer from '@/components/Footer'
import Hero1 from '@/components/Hero1'
import HomeHeader from '@/components/HomeHeader'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex flex-col gap-2 bg-herob'>
        <HomeHeader/>
        <Hero1/>
        <Footer/>
    </div>
  )
}

export default page