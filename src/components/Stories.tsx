import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface StoriesProps {
  imageSrc: StaticImageData
  link: string
  title: string
}

const Stories: React.FC<StoriesProps> = ({
  imageSrc,
  title,
  link, // Destructure the link prop
}) => {
  return (
    <Link translate='no'
      className='relative w-full h-[430px] rounded overflow-hidden'
      href={link}
    >
      <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' />
      <p className='cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>
        {title}
      </p>
    </Link>
  )
}

export default Stories
