import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import matriculas from '../../public/matriculas-abertas.png'
import celular from '../../public/unifatecie-celular.png'
import { KnowMore } from '@/components/KnowMore'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4'>
        <Image src={matriculas} alt='Foto da matrícula' />
        <Image src={celular} alt='Foto da matrícula' />
      </div>
      <div className='items-center justify-center flex flex-wrap px-4 py-2 bg-white w-full gap-2'>
        <div className="flex justify-between items-center w-full max-w-6xl 2xl:flex-row flex-col">
          <KnowMore />
          <div className={`flex sm:flex-row flex-col 2xl:flex-col gap-2 my-4`}>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Saiba Mais</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Graduação</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Pós</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Matricule-se</button>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Contatos</button>
          </div>
        </div>
      </div>
      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4 gap-2'>
        <div>
          
        </div>
        <div className='flex flex-row gap-2'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Bacharelado</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Licenciatura</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Tecnólogo</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Todos</button>
        </div>
      </div>
    </>
  )
}
