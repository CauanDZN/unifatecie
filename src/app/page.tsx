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
      <div className='items-center justify-center flex flex-wrap bg-white w-full p-4 gap-2'>
        <KnowMore />
        <div className='flex flex-col gap-2'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Saiba Mais</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Graduação</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Pós</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Matricule-se</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Contatos</button>
        </div>
      </div>
      
    </>
  )
}
