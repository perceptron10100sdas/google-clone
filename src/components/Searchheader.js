import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Searchbox from "@sambhav/components/Searchbox";
import SearchHeaderOpts from './SearchHeaderOption';

export default function Searchhead() {
  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center justify-between'>
        <Link href={"/"}>
        <Image  width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          />
        
        </Link>
        <div className="flex-1">
        <Searchbox/>

    
      </div>
        


        <div className="hidden md:inline-flex space-x-2 ">
            
<SettingsRoundedIcon className='header-icon'/>
<GridViewRoundedIcon className='header-icon'/>

        </div>

<button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">Sign in</button>

        </div>
        <SearchHeaderOpts/>
    </header>
  )
}
