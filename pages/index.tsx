import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import InputCity from '@/components/InputCity/InputCity'
import GetDate from '@/components/GetDate/GetDate'
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App 0.1.1</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Developed by Emilio Ortiz" />
        <meta name='theme-color' content='#374557' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/touch-icon.png"></link>
      </Head>
      <main className={styles.main}>
        <GetDate />
        <div className={styles.iconContainer}>
          <div>
            <Image className={styles.slideInRight}  src="/sun.svg" width={260} height={260} alt="sun icon" priority loading='eager'/>
          </div>
          <div className={styles.decorationFirst}></div>
          <div>
            <Image src="/cloud.svg" width={330} height={250}  alt="cloud icon"  priority loading='eager'/>
          </div>
        </div>
        <div className={styles.titleCont}>
          <h1><strong>Where</strong> are we?</h1>
          <InputCity />
        </div>
      </main>
    </>
  )
}
