import { Autoplay, Navigation, Parallax, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './styles.module.scss'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { Children, FC, } from "react";
import { ButtonSwiper } from "./buttons-swiper";
import { ISwiperProps } from "src/shared/lib/types/types-ui/swiper-types";


export const SwiperSlider: FC<ISwiperProps> = ({ children, }) => {

  const childrenArray = Children.toArray(children)
  // const swiper = useSwiper();

  return (
    <>
      <div className={styles.title}>Вы недавно смотрели:</div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Autoplay, Parallax]}
        autoplay
        parallax
        spaceBetween={20}
        navigation = {{
          prevEl: '.swiper__button__prev',
          nextEl: '.swiper__button__next'
        }}
        speed={1200}
        breakpoints={{
          0 :{
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024 :{
            slidesPerView: 6,
          }
        }}
        slidesPerView={6}
      >
        {
          childrenArray.map((el, index) => (
            <SwiperSlide key={index}>
              {
                el
              }
            </SwiperSlide>
          ))
        }
        <ButtonSwiper />
      </Swiper>
    </>
  )
}