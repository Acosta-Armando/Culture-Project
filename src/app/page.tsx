import Image from 'next/image'
import logo from '@/../public/images/logo.png'

export default function Home() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='w-[300px] h-[300px] md:w-[420px] md:h-[420px]'>
          <Image src={logo} alt={''} />
        </div>
      </div>
    </>
  )
}
