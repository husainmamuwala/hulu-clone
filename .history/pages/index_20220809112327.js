import Head from 'next/head'
import Header from '../components/Header'
import Nav



export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header */}
      <Header/>
      {/*Nav */}
      <Nav/>

      {/*Results*/}
      
    </div>
  )
}
