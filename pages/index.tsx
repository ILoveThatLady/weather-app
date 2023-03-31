import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import InputCity from '@/components/InputCity/InputCity'
import GetDate from '@/components/GetDate/GetDate'

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App 0.1.1</title>
        <meta name="description" content="Developed by Emilio Ortiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <GetDate />
        <div className={styles.decorationFirst}></div>
        <div className={styles.titleCont}>
          <h1><strong>Where</strong> are we?</h1>
        </div>
        <InputCity />
      </main>
    </>
  )
}
