import { FC } from 'react'
import styles from './styles.module.scss'
import { ButtonArrow } from '../../buttons'
import { useSwiper } from 'swiper/react'

export const ButtonSwiper:FC = () => {
    const swiper = useSwiper()

  return (
    <div className={styles.swiper__button}>
        <button className={styles.swiper__button__prev} onClick={() => swiper.slidePrev()} >
            <ButtonArrow />
        </button>
        <button className={styles.swiper__button__next} onClick={() => swiper.slideNext()}>
            <ButtonArrow />
        </button>
    </div>
  )
}
