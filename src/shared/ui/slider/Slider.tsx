import { Children, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Slider.module.scss';

type Props = {
   children: ReactNode;
   showElements: number;
   gap: number;
   minHeight: number;
};

export const Slider: FC<Props> = ({ children, showElements, gap, minHeight }) => {
   const sliderList = Children.toArray(children);
   const sliderRef = useRef<HTMLDivElement>(null);
   const [wrapperWidth, setWrapperWidth] = useState<number>(0);
   const [itemWidth, setItemWidth] = useState<number>(0);
   const [sliderPosition, setSliderPosition] = useState<number>(0);
   const [scrollingWidth, setScrollingWidth] = useState<number>(0);

   useEffect(() => {
      if (sliderRef.current) {
         const wrapperWidth = sliderRef.current?.getBoundingClientRect().width;
         const itemWidth = wrapperWidth / showElements;
         const scrollingWidth =
            wrapperWidth - (itemWidth + gap) * sliderList.length + gap * (sliderList.length - 1);

         setItemWidth(itemWidth);
         if (scrollingWidth < 0) {
            setScrollingWidth(Math.abs(scrollingWidth));
         }
         setWrapperWidth(wrapperWidth);
      }
   }, [showElements, gap, sliderList]);

   const scrollToPrev = () => {
      if (Math.abs(sliderPosition) >= wrapperWidth) {
         setSliderPosition((prev) => (prev += wrapperWidth));
      } else {
         setSliderPosition((prev) => (prev += Math.abs(sliderPosition)));
      }
   };
   const scrollToNext = () => {
      const widthLeft = scrollingWidth + sliderPosition;
      if (widthLeft >= wrapperWidth) {
         setSliderPosition((prev) => (prev -= wrapperWidth));
      } else {
         setSliderPosition((prev) => (prev -= widthLeft));
      }
   };

   return (
      <div ref={sliderRef} className={styles.slider}>
         <div
            style={{ left: `${sliderPosition}px`, columnGap: `${gap}px`, height: `${minHeight}px` }}
            className={styles.slider__wrapper}>
            {sliderList.map((el, index) => (
               <div
                  style={{ flex: `0 0 ${itemWidth - gap}px`, width: `${itemWidth - gap}px` }}
                  className={styles.slider__item}
                  key={index}>
                  {el}
               </div>
            ))}
         </div>

         <button
            className={`${styles.slider__button} ${styles.slider__button_prev}`}
            onClick={scrollToPrev}
            disabled={sliderPosition === 0}>
            Prev
         </button>
         <button
            className={`${styles.slider__button} ${styles.slider__button_next}`}
            onClick={scrollToNext}
            disabled={scrollingWidth === Math.abs(sliderPosition)}>
            Next
         </button>
      </div>
   );
};
