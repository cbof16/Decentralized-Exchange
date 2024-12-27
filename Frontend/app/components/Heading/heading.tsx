"use client";
import React, { use } from 'react'
import { Button } from "@/components/ui/button"
// import { signOut, signIn,auth} from "../../auth"
import { useSession,SessionProvider,signIn,signOut,SignOutParams} from "next-auth/react"
import { useRouter } from 'next/navigation';

const HeaderContent = () => {
  const session = useSession()
  const router=useRouter()
  return (
    <header className="flex justify-between pl-20 pr-20"> 
          <div className='font-extrabold text-2xl flex gap-2'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
</svg> */}
 WalletPro</div>
          <div className='font-semibold text-lg flex gap-6'>
           {session?.data?.user? <Button 
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }} 
              className='font-semibold' 
              variant="ghost"
            > 
              Sign Out
            </Button> :<Button onClick={()=> signIn("google",{ redirectTo: "/dashboard" })} className='font-semibold' variant="ghost"> 
                Sign In with Google
              </Button>}
              <Button className='bg-black text-white font-semibold' variant="ghost">
                Get Started
              </Button>
          </div>
    </header>
  )
}

const header = () => (
  <SessionProvider>
    <HeaderContent />
  </SessionProvider>
);

export default header;