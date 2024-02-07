import Link from 'next/link'
import React from 'react'
import { FaFileArchive } from "react-icons/fa";


const Navbar = () => {
    const linkList =[
        {label: 'Dashboard', href:'/'},
        {label: 'Issues', href:'/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-4 h-14 items-center'>
      <Link href="/"><FaFileArchive /></Link>
      <ul className='flex space-x-6 '>
        {linkList.map((links)=><Link key={links.href} className='text-blue-500 hover:text-blue-800 transition-colors' href={links.href}>{links.label}</Link>)}
      </ul>
    </nav>
  )
}

export default Navbar
