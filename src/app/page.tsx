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
          <div className={`flex flex-col sm:flex-row 2xl:flex-col gap-2 my-4`}>
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
            <h1 className='text-4xl font-medium text-gray-900 dark:text-white'>Graduação</h1>
            <p className='text-sm font-normal text-gray-900 dark:text-white'>Oferecemos cursos EAD com nota máxima no MEC. Estude de forma flexível, com aulas online interativas e suporte técnico disponível 24 horas.</p>
        </div>
        <div className='flex flex-row gap-2'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Bacharelado</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Licenciatura</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Tecnólogo</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Todos</button>
        </div>
      </div>
      <div className='items-center justify-center flex flex-wrap bg-white-600 w-full p-4 gap-2'>
        <div>
            <h1 className='text-4xl font-medium text-gray-900'>Pós-Graduação</h1>
            <p className='text-sm font-normal text-gray-900'>Oferecemos pós-graduação EAD com excelência acadêmica e reconhecimento no mercado. Aulas flexíveis e convenientes, suporte técnico 24 horas.</p>
        </div>
        <div className='flex flex-row gap-2'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Pós-Graduação</button>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Todos os Cursos</button>
        </div>
      </div>
      <div className='items-center justify-center flex flex-wrap bg-orange-600 p-8 gap-2'>
        <div>
            <h1 className='text-4xl font-medium text-white'>Matricule-se</h1>
            <p className='text-sm font-normal text-white whitespace-pre-line'>
            Transforme sua vida com a gente. <br />
            Cursos flexíveis, suporte 24 horas e excelência acadêmica.  <br />
            Comece sua jornada de sucesso agora mesmo!
            </p>
        </div>
        <div className='flex flex-row gap-2'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Matricule-se</button>
        </div>
        <div>
            <h1 className='text-4xl font-medium text-white'>Contatos</h1>
            <p className='text-sm font-normal text-white'>
              Transforme sua vida com a gente. <br />
              Cursos flexíveis, suporte 24 horas e excelência acadêmica. <br />
              Comece sua jornada de sucesso agora mesmo!</p>
        </div>
        <div className='flex flex-row gap-2'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'>Matricule-se</button>
        </div>
      </div>
    </>
  )
}
