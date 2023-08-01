"use client";
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import { useRouter } from 'next/navigation';


export default function HomeSearch() {
  const[input,setInput]=useState("");
  const[randomSearchLoading,setrandomSearchLoading]=useState(false)
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault()
    if(!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);

  }
  async function randomSearch(){
    setrandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setrandomSearchLoading(false);

  }
  return (
    <>
   <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
    <SearchOutlinedIcon className='"text-xl text-gray-500 mr-3"'/>
    <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
         
        />



<MicTwoToneIcon className="text-lg" />

   </form>
   <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
    
   <button onClick={handleSubmit} className='btn'>Google Search</button>
   <button disabled={randomSearchLoading} onClick={randomSearch} className='btn flex items-center justify-center disabled:opacity-80'>
   {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ):(
    
    
    "I am feeling lucky")}</button>
    

   </div>
   </>
  )
}
