import React from 'react'
import CountryLookUp from './CountryLookUp'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
        <div className='border-b px-8 py-3'>
            <CountryLookUp/>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
            <ul className="flex items-center space-x-6">
                
            <li>About</li>
            <li>Advertisement</li>
            <li>Business</li>
            <li>How search works</li>




            </ul>


        </div>




    </footer>
  )
}
