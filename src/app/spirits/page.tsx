import React from 'react'
import Image from 'next/image'
import spirits2 from '@/../public/images/espiritus2.jpg'
import spirits3 from '@/../public/images/espiritus3.jpg'

function page() {
  return (
    <div className='p-4'>
      <div className='flex flex-col grid-cols-9 p-2 mx-auto md:grid'>
        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Los espíritus de la Región Sanitaria de San Felipe.
            </h3>
            <p className='mt-2 leading-6'>
              Existen episodios imborrables en nuestras vidas y las experiencias
              paranormales son unas de esas vivencias que siempre que contamos,
              sentimos el mismo miedo que cuando las vivimos. Los siguientes
              relatos forman parte de una serie de cuentos sobre aparecidos en
              la Región Sanitaria de San Felipe, ubicada en pleno centro de la
              ciudad, que para la década de 1950 llegó a ser sede de la
              controversial y sanguinaria Seguridad Nacional.
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
              El Cuento de Luz 1/2.
            </h3>
            <p className='mt-2 leading-6'>
              Corría el año 2004, cuando Luz una niña de 12 años, esperaba
              ansiosa y asustada su turno para pasar a consulta con la dentista.
              Sentada en el banco comenzaba aburrirse, de pronto un señor mayor
              se sentó a su lado y pasado unos minutos el mismo comenzó a
              hablarle, le preguntó su nombre y edad, que estudiaba y Luz le
              contestó todas sus preguntas. El hombre empezó a contarle a Luz
              sus vivencias cuando tenía la edad de ella, ambos reían cuando él
              le contaba sus travesuras.
            </p>
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              El Cuento de Luz 2/2.
            </h3>
            <p className='mt-2 leading-6'>
              La mamá de Luz se encontraba a unos metros de su hija, la observa
              hablar sola, mover sus manos y reír a carcajadas. Tal parece que
              la niña no sabía que el señor con el que hablaba, era un alma en
              pena. La mamá se acercó y le dijo que con quién hablaba, ella le
              contestó que con el señor Remigio y cuando volteó a ver la banca,
              Remigio se había esfumado. De pronto el llanto invadió a Luz,
              quien escasamente entendía lo que sucedía, sus manos estaban frías
              y su rostro estaba pálido, unas señoras de limpieza que pasaban
              frente a ellas se percataron de la situación y decidieron ayudar,
              le dieron un poco de agua y le contaron que el espíritu de Remigio
              le gustaba hablar con los niños, porque no era la primera que
              decía haberlo visto.
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
            <Image src={spirits2} alt={''} />
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              El Cuento de Norberto 1/2.
            </h3>
            <p className='mt-2 leading-6'>
              El reloj de Norberto marcaba las 2:50 de la madrugada, la noche
              estaba clara debido a que la luna estaba llena, pero parecía una
              noche de esas en las que se presiente que algo pasará, había un
              silencio sepulcral que inquietaba a Norberto. Su compañero de
              guardia había decidido dormir una siesta por lo que las rondas le
              tocaba hacerlas solo. Con valentía decidió pasar por un lugar del
              cual había escuchado hablar muchas veces, según existía un sótano
              donde se cometieron actos de violencia en la época de dictadura
              perezjimenista. Norberto decidió hacerles caso omiso a esos
              cuentos y siguió su andar, de pronto comenzó a sentir pasos detrás
              de él y un quejido de dolor que no sabía de dónde venía, pues
              estaba pasando justamente por el lugar que comentaban todos.
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
              El Cuento de Norbeto 2/2.
            </h3>
            <p className='mt-2 leading-6'>
              Valeroso comenzó a preguntar: ¿soco vo, ¿quién anda poray? - ese
              eres tú Pelayo que andáis asustándome, anda ve si la gallina puso.
              El quejido se incrementó y el aullar de algunos perros callejeros
              comenzó a pararle los pelos a Norberto. ¡Ay chuchito, ¿será que si
              sale ese tal finao que dicen?, preguntaba el hombre que yacía
              estático frente aquel lugar oscuro, mientras una brisa
              escalofriante entró de la nada e hizo que varias puertas se
              cerraran al mismo tiempo. Norberto comenzó a retar a aquella
              presencia a que se manifestara, el miedo lo invadía, pero no
              quería correr despavorido, sus piernas parecían no responderle.
              ¡Veni y me asustai aquí en mi cara, pa que veas lo que te voy
              hacer!, exclamó el hombre con voz temblorosa, cuando de pronto un
              hombre alto se paró frente a él y lanzó un pequeño soplido en su
              cara, a Norberto no le quedó de otra que salir corriendo y llegar
              a donde dormía Pelayo, mudo, frío y orinado se encontraba, estaba
              pálido y entre las pocas palabras que pronunciaba decía: ¡El finao
              Pelayo, es el finao!
            </p>
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <Image src={spirits3} alt={''} />
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
              Norberto y Luz vivieron situaciones paranormales diferentes en un
              mismo lugar y en épocas distintas. Pero conectadas en lo
              fantasmal, como estos relatos, hay otros que no se han contado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
