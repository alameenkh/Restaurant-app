import Head from 'next/head'
import Image from 'next/image'
import { Slider } from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant Kerala</title>
        <meta name="description" content="Best Native restaurant in kerala" />
        <link rel="icon" href="" />
      </Head>
      <Slider/>
    </div>
  )
}
