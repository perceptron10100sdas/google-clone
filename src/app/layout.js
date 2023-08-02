import Image from 'next/image'
import './globals.css'

import Footer from '@sambhav/components/Footer'




export const metadata = {
  title: 'Google clone',
  description: 'Generated by perceptron10100',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen" >
       


        {children}
        
        <Footer/>
        </body>
    </html>
  )
}
