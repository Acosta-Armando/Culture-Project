import Image from 'next/image'
import React from 'react'
import aboutImg from '@/../public/images/about.png'

function page() {
  return (
    <div className='sm:flex items-center justify-center max-w-screen-xl'>
      <div className='sm:w-1/2 p-5'>
        <div className='image object-center text-center flex items-center justify-center'>
          <Image src={aboutImg} alt={''} width={380} height={380} />
        </div>
      </div>
      <div className='sm:w-1/2 p-5'>
        <div className='text'>
          <span className='text-gray-500 border-b-2 border-indigo-600 uppercase'>
            About us
          </span>
          <h2 className='my-4 font-bold text-3xl  sm:text-4xl '>
            About <span className='text-indigo-600'>This Project</span>
          </h2>
          <p className='text-gray-500'>
            Este proyecto nace gracias a mi abuelo, el al ser del estado Yaracuy
            y haber tenido sus primeros 18 años de vida allá conoce mas que
            nadie sobre el campo y todos los acontecimientos paranormales que
            allá suceden. El nombre de esta pagina se traduce como: “Cuentos de
            Abuelos” y es justamente porque todos los conocimientos que poseo
            sobre la cultura Yaracuyana y todo lo paranormal de allá es por los
            cuentos que nos relataba mi abuelo a mi y mis hermanos sobre su vida en las frías
            montañas de Punto Rico, más allá del pueblo de Aroa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
