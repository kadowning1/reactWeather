import React from 'react'
import Link from 'next/link'
import { useGeolocation } from 'react-use';

export default function Location() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className=''>
        <h1 className='text-3xl font-bold text-center'>
          Find your location
        </h1>
      </div>
      <Link href='/'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Test
        </button>
      </Link>
    </div>
  )
}
