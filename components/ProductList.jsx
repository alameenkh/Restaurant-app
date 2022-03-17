import styles from '../styles/ProductList.module.css'
import Pizza from './Pizza'

export const ProductList = ({pizzaList}) => {  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Restaurant Snack Ever</h1>
      <p className={styles.desc}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s
      </p>
      <div className={styles.wrapper}>
      {pizzaList.map((pizza) => (
          <Pizza key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}


