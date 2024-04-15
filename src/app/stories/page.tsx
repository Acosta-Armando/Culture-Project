import Image from 'next/image'
import React from 'react'
import ml1 from '@/../public/images/ml1.jpg'
import espiritus1 from '@/../public/images/espiritus1.jpg'
import perro1 from '@/../public/images/perro1.jpg'
import Stories from '@/components/Stories'


function page() {
  return (
    <div className='flex flex-col md:grid md:grid-cols-3 gap-3'>
        <Stories imageSrc={ml1} link='/mariaLionza' title='Maria Lionza'/>
        <Stories imageSrc={espiritus1} link='/spirits' title='Los espíritus de la Región Sanitaria de San Felipe'/>
        <Stories imageSrc={perro1} link='/cementeryDog' title='El perro negro del Cementerio Municipal de Cocorote '/>
    </div>
  )
}

export default page
