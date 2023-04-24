import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import matriculas from '../../public/matriculas-abertas.png'
import celular from '../../public/unifatecie-celular.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div className='items-center justify-center flex flex-wrap bg-orange-600 w-full p-4'>
        <Image src={matriculas} alt='Foto da matrícula' />
        <Image src={celular} alt='Foto da matrícula' />
      </div>
    </>
  )
}
