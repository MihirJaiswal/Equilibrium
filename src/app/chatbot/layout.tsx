import React, { ReactNode } from 'react'

function RootLayout({children} : {children : ReactNode}) {
  return (
    <main className='bg-[#07504C] h-full'>
      {children}
    </main>
  )
}

export default RootLayout