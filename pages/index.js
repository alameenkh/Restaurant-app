import Head from 'next/head'
import Image from 'next/image'
import { ProductList } from '../components/ProductList'
import { Slider } from '../components/Slider'
import styles from '../styles/Home.module.css'
import axios from "axios"

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant Kerala</title>
        <meta name="description" content="Best Native restaurant in kerala" />
        <link rel="icon" href="" />
      </Head>
      <Slider/>
      <ProductList pizzaList={pizzaList} />
    </div>
  )
}


export const getServerSideProps = async () => {
  const url =
    "local" === process.env.NEXT_PUBLIC_ENV
      ? "http://localhost:3000/api/products"
      : "/api/products";
      console.log("the url 1", process.env.NEXT_PUBLIC_ENV);
  const res = await axios.get(url);
  console.log("the res is", res);
  return {
    props: {
      pizzaList: res.data,
    },
  };
}
