import { FC } from "react"
import { Link } from "react-router-dom"
import { Button } from "src/shared"
import styles from './styles.module.scss'



export const ProductFavoriteListEmpty: FC = () => {
  return (
    <div className={styles.favorite}>
        <div className={styles.favorite_title}>
            В Избранном пока пусто.
        </div>
        <div className={styles.favorite_text}>Сохраняйте товары, которые понравились, чтобы долго не искать.</div>
        <Button className={styles.favorite_button}>
            <Link to={'/'} className={styles.favorite_link}>На главную</Link>
        </Button>
    </div>
  )
}
