import MobileNav from '@/components/shared/mobileNav'
import Sidebar from '@/components/shared/sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
        <div className="root-container">
            <div className="wrapper">
                {children}
            </div>
        </div>

        <Toaster />
    </main>
  )
}

export default Layout 
