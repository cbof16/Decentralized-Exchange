import React from 'react'
import { Button } from "@/components/ui/button"

const herosection = () => {
  return (
    <div className='flex flex-col gap-8 pl-20 pr-20 pt-20 justify-center items-center'>
        <div className='font-extrabold text-5xl text-center'>
             Secure Wallet Infrastructure for the Modern Web
        </div>
        <div className='font-medium text-xl text-center text-gray-500'>
        Build and scale your financial applications with our enterprise-grade wallet infrastructure. Secure, compliant, and ready for global deployment.
        </div>
        <div className='flex gap-4'>
            <Button variant="ghost" className='bg-black text-white font-semibold px-6 py-5'> 
                Start Free Trial
            </Button>
            <Button className='bg-white text-black font-semibold px-6 py-5'>
                Schedule Demo
            </Button>  
        </div>
    </div>
  )
}

export default herosection