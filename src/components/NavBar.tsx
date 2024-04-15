/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/* Navbar */}
      <nav className='bg-black p-4'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
          <div
            translate='no'
            className='text-gray-500 font-bold text-2xl mb-4 lg:mb-0 hover:text-white hover:cursor-pointer'
          >
            <Link href='/' className='text-gray-500 px-4 py-2 hover:text-white'>
              Grandpa's Tales
            </Link>
          </div>

          {/* Hamburger menu for small screens */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-500 focus:outline-none'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div
            className={`lg:flex flex-col lg:flex-row ${
              isOpen ? 'block' : 'hidden'
            } lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}
          >
            <Link href='/' className='text-gray-500 px-4 py-2 hover:text-white'>
              Home
            </Link>
            <Link
              href='/stories'
              className='text-gray-500 px-4 py-2  hover:text-white'
            >
              Stories
            </Link>
            <Link
              href='/about'
              className='text-gray-500 px-4 py-2  hover:text-white'
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
