import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='shadow bg-blue-600 flex items-center justify-between p-3'>
        <h1 className='text-white font-semibold flex-initial w-64'>Header component</h1>
        <nav> <Link href="/" className='underline'>Home</Link></nav>
    </div>
  )
}

export default Header