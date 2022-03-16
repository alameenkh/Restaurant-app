import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Slider.module.css'

export const Slider = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png"
    ]
    const [index, setIndex] = useState(0);

    const handleArrow = (key)=> {
        if (key === 1) {
            setIndex(index !== 0 ? index - 1 : 2)
        }else{
            setIndex(index !== 2 ? index + 1 : 0)
        }
        console.log(index)
    }

    
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow(1)}>
                <Image src="/img/arrowl.png" alt='' layout='fill' objectFit='contain'></Image>

            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i} >
                        <Image src={img} alt='' layout='fill' objectFit='contain'></Image>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow(2)}>
                <Image src="/img/arrowr.png" alt='' layout='fill' objectFit='contain'></Image>

            </div>
        </div>
    )
}
