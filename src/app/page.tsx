import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex items-center'>
      <h1>Tela principal</h1>
    </div>
  )
}
