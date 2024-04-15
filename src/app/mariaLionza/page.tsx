import Image from 'next/image'
import React from 'react'
import ml2 from '@/../public/images/ml2.jpg'
import ml3 from '@/../public/images/ml3.jpg'
import ml4 from '@/../public/images/ml4.jpg'
import ml5 from '@/../public/images/ml5.jpg'

function page() {
  return (
    <div className='p-4'>
      <div className='flex flex-col grid-cols-9 p-2 mx-auto md:grid'>
        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>Maria Lionza.</h3>
            <p className='mt-2 leading-6'>
              María Lionza, también conocida como María de la Onza, Yara o
              Guaichía, es una deidad femenina venerada en el espiritismo
              venezolano. Su figura es el resultado de un sincretismo entre
              creencias católicas, indígenas y africanas. El culto a María
              Lionza tiene sus raíces en el siglo XX y se ha convertido en una
              parte significativa de la espiritualidad en Venezuela.
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
            <Image src={ml2} alt={''} />
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Descripción y Orígenes.
            </h3>
            <p className='mt-2 leading-6'>
              Las referencias más antiguas al culto de María Lionza se
              encuentran en testimonios orales que datan de principios del siglo
              XX. Campesinos de la región de Yaracuy y áreas adyacentes discuten
              la existencia de una devoción a la reina María Lionza en las
              sierras de la montaña Sorte en Chivacoa. En ese tiempo, el culto
              estaba basado en la devoción a los antepasados, incluyendo
              caciques indígenas, espíritus africanos y héroes de la
              independencia venezolana. Aunque se considera de origen indígena,
              también se representa como una mujer blanca con una corona de oro
              en la cabeza. No existe documentación histórica sobre la mujer
              representada, pero hay numerosas teorías contemporáneas sobre el
              origen del mito basadas en la tradición oral venezolana. María
              Lionza es considerada una de las “tres potencias” centrales del
              culto espiritista venezolano, junto con el cacique Guaicaipuro y
              el Negro Felipe. Cada 12 de octubre, se realizan ceremonias en
              torno a su figura en la Montaña de Sorte en Yaracuy, que es un
              sitio de peregrinación constante para los creyentes del culto
              marialioncero.
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
            <Image src={ml3} alt={''} />
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Espiritismo Marialioncero.
            </h3>
            <p className='mt-2 leading-6'>
              Representada popularmente como una diosa o reina, María Lionza es
              la figura central del espiritismo marialioncero. En este culto, se
              mezclan ritos indígenas y africanos, y ha absorbido elementos
              místicos y teológicos de otras culturas. A pesar de su origen
              indígena, María Lionza trasciende las categorías y se convierte en
              una figura espiritual poderosa y multifacética. Su culto tiene una
              influencia significativa en la sociedad venezolana y en otros
              países cercanos.
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
            <Image src={ml4} alt={''} />
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              La Leyenda de Maria Lionza 1/2.
            </h3>
            <p className='mt-2 leading-6'>
              En el Estado Yaracuy, abundan las leyendas mágicas y misteriosas,
              y una de las más fascinantes es la leyenda de María Lionza. Esta
              historia se remonta a la época prehispánica, cuando los indígenas
              que habitaban la región veneraban a Yara, la diosa de la
              Naturaleza y del Amor. Según la tradición, Yara era una mujer
              triste de grandes ojos verdes, pestañas largas y amplias caderas.
              Su cuerpo despedía el aroma de las orquídeas, y su cabello liso y
              largo llegaba hasta la cintura. Tres hermosas flores abiertas
              adornaban sus orejas. Los indígenas creían que Yara fue una
              hermosa princesa raptada por una enorme culebra dueña de las
              lagunas y los ríos. La leyenda cuenta que Yara fue escondida por
              su padre en una cueva de la montaña, prohibiéndole verse reflejada
              en el agua. Sin embargo, un día, una fuerza misteriosa adormeció a
              los guardianes y la joven salió de la cueva. Al ver su reflejo en
              el lago, sus ojos se confundieron con el color del agua, y el
              dueño del lago, una gran anaconda, se enamoró de ella y la atrajo
              hacia su mundo.
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
            <Image src={ml5} alt={''} />
          </div>
        </div>

        <div className='flex md:contents flex-row-reverse'>
          <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              La Leyenda de Maria Lionza 2/2.
            </h3>
            <p className='mt-2 leading-6'>
              Así, María Lionza (como se la conoce actualmente) y la poderosa
              serpiente celebraron una conmoción espiritual y mística. Cuando el
              padre de María Lionza intentó separarlos, la anaconda creció
              enormemente y estalló, provocando una gran inundación que arrasó
              con toda la aldea. Otra versión de la leyenda indica que, tras ser
              raptada por la anaconda, los espíritus de la montaña decidieron
              castigar a la culebra, haciendo que se hinchara hasta morir
              reventada. Después de eso, la joven princesa, convertida en diosa,
              fue elegida como la dueña de las lagunas, ríos y cascadas. Se
              convirtió en la madre protectora de la naturaleza y la reina del
              amor, siendo también la diosa protectora de los animales 1. Esta
              historia de María Lionza sigue cautivando a quienes visitan el
              Estado Yaracuy, y su legado perdura como parte fundamental de la
              rica tradición cultural de la región.
            </p>
          </div>
          <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
            <div className='flex items-center justify-center w-6 h-full'>
              <div className='w-1 h-full bg-gray-300 rounded-t-full bg-gradient-to-b from-gray-500 to-gray-300'></div>
            </div>
            <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
