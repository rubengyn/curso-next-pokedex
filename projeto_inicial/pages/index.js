
import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title> Página Principal</title>
        <meta name="keyworks" content="Roupas, Calçados, Boné"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>
      <div >
        <h1 className={styles.title}>Hello World Next.js</h1>
        <Image 
          src="/images/city.jpg"
          width="300px"
          height="400px"
          alt="Cidade a noite"
          />
      </div>
    </>
  )
}
