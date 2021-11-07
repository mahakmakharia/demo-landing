import Head from 'next/head'
import StepsSection from '../src/components/steps/StepsSection'
import HeroSection from '../src/components/hero-section/HeroSection'

import FreeProductsSection from '../src/components/products/FreeProductsSection'
import Footer from '../src/components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Slogan Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/galanogrotesque-regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/galanogrotesque-medium.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/galanogrotesque-semibold.otf"
          as="font"
          crossOrigin=""
        />

      </Head>
      <main>
        <HeroSection />
        <StepsSection />
        <FreeProductsSection />
        <Footer />
      </main>

    </div>
  )
}
