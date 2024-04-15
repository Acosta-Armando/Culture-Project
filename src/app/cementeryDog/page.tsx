import Image from 'next/image'
import React from 'react'
import perro2 from '@/../public/images/perro2.jpg'
import perro3 from '@/../public/images/perro3.jpg'

function page() {
  return (
    <div className='p-4'>
      <div className='flex flex-col grid-cols-9 p-2 mx-auto md:grid'>
        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              El perro negro del Cementerio Municipal de Cocorote.
            </h3>
            <p className='mt-2 leading-6'>
              Seguramente muchos nos hemos topado con un perro callejero que en
              ocasiones nos hace compañía por un cierto trayecto y luego de la
              nada, se pierde y sigue su rumbo. Pues hace muchos años, en el
              Cementerio Municipal de Cocorote un perro negro misterioso les
              hacía compañía a algunas personas, pero sus intenciones era
              macabras.
            </p>
          </div>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300 rounded-t-full bg-gradient-to-b from-gray-500 to-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
        </div>

        <div className='flex md:contents'>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              El Cuento de Ramon 1/3.
            </h3>
            <p className='mt-2 leading-6'>
              Ramón Castro, era un hombre solitario en la vida, su madre había
              fallecido una mañana de abril del año 1994, una muerte natural
              dejó sin madre a Ramón quien quedó en la soledad de aquella casona
              por Mamapera, su tristeza la desahogaba en la fría lápida de su
              madre. Ramón buscó refugio en el alcohol, así que en una noche
              calurosa y sin luna, decidió meterse al cementerio por la reja
              trasera, con una vela y su carterita de Cocuy Leal en la cintura,
              con valentía penetró aquella oscuridad entre las tumbas, con los
              pies hacía a un lado la maleza, hasta que llegó a una de las
              paredes laterales donde estaba enterrada su mamá.
            </p>
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              El Cuento de Ramon 2/3.
            </h3>
            <p className='mt-2 leading-6'>
              De pronto de aquel monte salió un perro negro de gran tamaño con
              los ojos color rojo, de su hocico salía sangre mezclada con baba.
              Ramón al ver aquel espectral animal salió corriendo mientras el
              perro lo perseguía, el aspecto del perro iba cambiando mientras
              más se acercaba a Ramon, de pronto cuando se acercaba al portón
              para brincarlo y salir, se tropezó y cayó sobre una tumba, el
              perro negro se paró en dos patas y se transformó en un hombre de
              traje cuyos ojos eran iguales a los del perro, pero de su boca
              salían pequeñas llamas de fuego.
            </p>
          </div>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300 rounded-t-full bg-gradient-to-b from-gray-500 to-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
        </div>

        <div className='flex md:contents'>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              El Cuento de Ramon 3/3.
            </h3>
            <p className='mt-2 leading-6'>
              Ramon quedó privado del susto, no podía gritar, sentía mucha
              presión en su pecho, el hombre no hablaba, pero de su cuerpo salía
              un olor a azufre, el pobre Ramón estaba frente a una entidad
              demoníaca, como pudo se levantó, su cuerpo estaba mojado porque la
              carterita de cocuy se le había reventado. Al día siguiente desde
              el porche de su casa sentado en su silla de mimbre, les contaba a
              algunos de sus amigos el encuentro con Mandinga.
            </p>
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <Image src={perro2} alt={''} />
          </div>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300 rounded-t-full bg-gradient-to-b from-gray-500 to-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
        </div>

        <div className='flex md:contents'>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              El Cuento de Julia.
            </h3>
            <p className='mt-2 leading-6'>
              Al igual que Ramón, a Julia le sucedió lo mismo. Fielmente iba a
              visitar a su hermano todos los domingos, estaba enterrado muy
              cerca de la entrada principal y luego de que le colocaba flores,
              iba a visitar a algunos vecinos que estaban sepultados muy cerca
              de un frondoso árbol. Era el mediodía del 20 de junio de 1999,
              fecha luctuosa de su hermano y al finalizar la visita a su
              sepultura, se tropezó con aquel perro negro, como gesto de cariño
              se agachó y tocó su cabeza, el perro se fue detrás de ella y la
              acompañó en su recorrido todo parecía marchar bien, pero el perro
              comenzó aullar y a ladrarle, Julia estaba frente a aquel perro el
              cual se paraba en dos patas y comenzaba a develar a un hombre de
              traje negro y fino sombrero tal cual lo había visto Ramón. Julia
              pudo ver el rostro pálido con una media sonrisa muy macabra, de
              pronto una fuerte carcajada despertó a la mujer del trance y
              corrió tanto que llegó rápido a la entrada y contó lo que había
              vivido frente a algunas personas que no creían su historia.
            </p>
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <Image src={perro3} alt={''} />
          </div>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300 rounded-t-full bg-gradient-to-b from-gray-500 to-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
        </div>

        <div className='flex md:contents'>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto'>
            <p className='mt-2 leading-6'>
              Sobre este perro negro que se transformaba en el propio señor de
              las tinieblas, no se supo más. Algunas personas de la zona lo
              escuchaban aullar, hasta que dejó de salir en el cementerio.
              Vecinos del barrio La Libertad decían que la aparición de ese
              perro se debía a las malas prácticas de brujería de algunas
              señoras del sector, quienes se reunían para hacerles hechizos a
              sus maridos. Curiosamente el perro dejó de aparecer cuando murió
              una de las últimas mujeres implicadas en los actos esotéricos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
