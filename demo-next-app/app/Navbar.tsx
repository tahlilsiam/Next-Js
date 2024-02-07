'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaFileArchive } from "react-icons/fa";
import classnames from 'classnames';


const Navbar = () => {
    const currentPath = usePathname();
    console.log(currentPath);

    const linkList =[
        {label: 'Dashboard', href:'/'},
        {label: 'Issues', href:'/Issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-4 h-14 items-center'>
      <Link href="/"><FaFileArchive /></Link>
      <ul className='flex space-x-6 '>
        {linkList.map((links)=>
        <Link key={links.href} 
        className={classnames(
            'text-green-500',
            {
                underline: links.href === currentPath,
                'hover:text-green-700 transition-colors': true
            }
        )}
        href={links.href}>
            {links.label}
        </Link>)}
      </ul>
    </nav>
  )
}

export default Navbar
