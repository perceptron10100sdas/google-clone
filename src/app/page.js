import HomeHeader from '@sambhav/components/HomeHeader'
import React from 'react'
import Image from "next/image";
import HomeSearch from '@sambhav/components/HomeSearch';

export default function home() {
  return (
    <>
     <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
    <HomeHeader/>
</div>
    <div className="flex flex-col items-center mt-24">
    <Image
      width="300"
      height="100"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
    />
<HomeSearch/>
</div>

  
  </>
  )
}
