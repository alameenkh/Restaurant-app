import Image from 'next/image'
import styles from '../styles/Pizza.module.css'

const Pizza = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt="" width="500" height="500"/>
        <h1 className={styles.title}>Lorem Ipsum</h1>
        <span className={styles.price}>RS 120</span>
        <p className={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
    </div>
  )
}

export default Pizza