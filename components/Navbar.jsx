import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32"></Image>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now</div>
                    <div className={styles.text}>99 1123 1123</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>HomePage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/logo.png" alt="" width="160px" height="69px"></Image>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blogs</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                <Image src="/img/cart.png" alt="" width="30px" height="30px"></Image>
                <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar