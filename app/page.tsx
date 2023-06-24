import Image from 'next/image'
import HeaderLP from '@/components/HeaderLP'
import Category from '@/components/Category'
import About from '@/components/About'
import Ourservices from '@/components/Ourservices'
import FooterLP from '@/components/FooterLP'

export default function Home() {
  return (
    <>
      <HeaderLP />
      <Category />
      <About />
      <Ourservices />
      <FooterLP />
    </>
  )
}
