"use client";
import React from 'react'
import { useSearchParams,useRouter } from 'next/navigation';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';


export default function Searchx() {
    const searchParams=useSearchParams();
    const router=useRouter()
    const searchTerm=searchParams.get("searchTerm")
    const[term,setTerm]=useState(searchTerm || "")
    function handleSubmit(e) {
      e.preventDefault();
      if (!term.trim()) return;
      router.push(`/search/web?searchTerm=${term}`);
    }

  return (
   <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
    <input
    type="text"
    className="w-full focus:outline-none"
    value={term}
    onChange={(e) => setTerm(e.target.value)}

    />
    
    <ClearRoundedIcon className="text-2xl text-gray-500 cursor-pointer sm:mr-2" onClick={() => setTerm("")} />
    <MicTwoToneIcon  className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
    <SearchOutlinedIcon className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"   onClick={handleSubmit}/>

   </form>
  )
}
