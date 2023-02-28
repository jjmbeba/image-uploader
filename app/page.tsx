import { Inter } from '@next/font/google'
import Container from './components/Container'
import Result from './components/Result';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <Container/>
    </main>
  )
}
