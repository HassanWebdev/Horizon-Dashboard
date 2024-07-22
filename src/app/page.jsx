'use client'
import Hero from '@/components/Custom/Hero'
import Chart from '@/components/Custom/Chart'
import Chart2 from '@/components/Custom/Chart2'
import Footer from '@/components/Custom/Footer'
import { useEffect } from 'react'
function Page() {
  useEffect(()=>{
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  },[])
  return (
    <div className="min-h-screen w-full bg-[#F5F7FF] pl-[1.5rem] pr-14">
      <Hero />
      <Chart />
      <Chart2 />
      <Footer />
    </div>
  );
}

export default Page;
