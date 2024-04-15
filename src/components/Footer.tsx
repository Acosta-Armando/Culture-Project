import Image from 'next/image'
import React from 'react'
import facebook from '@/../public/images/facebook.svg'
import instagram from '@/../public/images/instagram.svg'
import linkedin from '@/../public/images/linkedin.svg'
import twitter from '@/../public/images/twitter.svg'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='flex flex-col space-y-10 justify-center m-8'>
      <nav
        translate='no'
        className='flex justify-center flex-wrap gap-6 text-gray-500 font-normal md:font-medium'
      >
        <Link className='hover:text-white' href='/'>
          Home
        </Link>
        <Link className='hover:text-white' href='/stories'>
          Stories
        </Link>
        <Link className='hover:text-white' href='/about'>
          About
        </Link>
      </nav>

      <div className='flex justify-center space-x-5'>
        <Link href='https://www.linkedin.com/in/armandkun95' target='_blank'>
          <Image src={linkedin} alt={''} />
        </Link>
        <Link href='https://www.facebook.com/armajosira/' target='_blank'>
          <Image src={facebook} alt={''} />
        </Link>
        <Link
          href='https://www.instagram.com/armajosira/?hl=es-la'
          target='_blank'
        >
          <Image src={instagram} alt={''} />
        </Link>
        <Link href='https://twitter.com/armajosira' target='_blank'>
          <Image src={twitter} alt={''} />
        </Link>
      </div>
      <div>
        <p className='text-center text-gray-500 font-medium'>
          &copy; Armando Acosta - Rosmary Llovera.
        </p>
        <p className='text-center text-gray-500 font-medium'>
          All rights reservered.
        </p>
      </div>
    </footer>
  )
}

export default Footer
