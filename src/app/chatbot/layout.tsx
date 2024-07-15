import React, { ReactNode } from 'react'

function RootLayout({children} : {children : ReactNode}) {
  return (
    <main className='bg-herob h-full'>
      {children}
    </main>
  )
}

export default RootLayout