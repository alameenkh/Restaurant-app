import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'


const Product = () => {
  const pizza = {
      id: 1,
      img: '/img/pizza.png',
      name: 'Cheeze pepperoni',
      price: [15.00, 23.00, 45.00],
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s'
  }

  const [size, setSize] = useState(0)


  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" alt=''/>
            </div>            
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>Rs. {pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose Your Size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>setSize(0)}>
                    <Image src="/img/size.png" layout="fill"></Image>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(1)}>
                    <Image src="/img/size.png" layout="fill"></Image>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(2)}>
                    <Image src="/img/size.png" layout="fill"></Image>
                    <span className={styles.number}>Large</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
