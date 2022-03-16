import Image from 'next/image'
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout='fill' alt=''/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        Watch and grow with this Restaurant
                    </h2>
                </div>  
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        Find Our Restaurant
                    </h1>
                    <p className={styles.text}>
                        12th main, Opposite Smart city,
                        <br /> info park road, Kakkanad
                        <br /> Kochi, 567001
                    </p>
                </div> 
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        Working Hours
                    </h1>
                    <p className={styles.text}>
                        Monday to Friday
                        <br /> 9:00 - 18:00
                    </p>
                </div>    
            </div>
        </div>
    )
}

export default Footer