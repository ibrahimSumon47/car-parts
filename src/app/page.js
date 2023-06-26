
import Banner from '@/components/Home/Banner/Banner'
import Footer from '@/components/Home/Footer/Footer'
import Navbar from '@/components/Home/Navbar/Navbar'
import PopularParts from '@/components/Home/PopularParts/PopularParts'
import Stat from '@/components/Home/Stat/Stat'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-w-screen-2xl mx-auto'>
      <Navbar/>
      <Banner/>
      <Stat/>
      <PopularParts/>
      <Footer/>
    </main>
  )
}
