import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex'>
      <Image src="/unifatecie.png" alt='Foto da Unifatecie' width={400} height={40}/>
      <h1>Tela principal</h1>
    </div>
  )
}
