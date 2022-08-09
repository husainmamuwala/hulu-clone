import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>lets build hulu 2.0</h1>
      
    </div>
  )
}
