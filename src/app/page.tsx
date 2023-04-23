import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex'>
      <Image src="/unifatecie.png" alt='Foto da Unifatecie' width={300} height={84}/>
      <h1>Tela principal</h1>
    </div>
  )
}
