import { Children, FC, ReactNode, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { useAppSelector } from '../../lib';
import { Icon } from '..';

type Props = {
   children: ReactNode;
   gap: number;
   minHeight: number;
};

export const Slider: FC<Props> = ({ children, gap, minHeight }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const sliderList = Children.toArray(children);
   const sliderRef = useRef<HTMLDivElement>(null);
   const [wrapperWidth, setWrapperWidth] = useState<number>(0);
   const [sliderPosition, setSliderPosition] = useState<number>(0);
   const [scrollingWidth, setScrollingWidth] = useState<number>(0);

   useEffect(() => {
      if (sliderRef.current) {
         const wrapperWidth = sliderRef.current?.getBoundingClientRect().width;
         const sliderWidth = 215 * sliderList.length + gap * (sliderList.length - 1);
         const scrollingWidth = sliderWidth - wrapperWidth + 32;

         if (scrollingWidth <= 0) {
            setScrollingWidth(0);
         } else {
            setScrollingWidth(scrollingWidth);
         }
         setWrapperWidth(wrapperWidth);
      }
   }, [gap, sliderList, windowWidth]);
   const scrollToPrev = () => {
      if (Math.abs(sliderPosition) >= wrapperWidth) {
         setSliderPosition((prev) => (prev += wrapperWidth));
      } else {
         setSliderPosition((prev) => (prev += Math.abs(sliderPosition)));
      }
   };
   const scrollToNext = () => {
      const widthLeft = scrollingWidth + sliderPosition;
      const test = !!((wrapperWidth - 32 + gap) % (214 + gap));
      if (!test) {
         if (widthLeft >= wrapperWidth) {
            setSliderPosition((prev) => (prev -= wrapperWidth));
         } else {
            setSliderPosition((prev) => (prev -= widthLeft));
         }
      } else {
         if (widthLeft >= wrapperWidth) {
            setSliderPosition(
               (prev) =>
                  (prev -= (215 + gap) * Math.floor((wrapperWidth - 32 + gap) / (215 + gap))),
            );
         } else {
            setSliderPosition((prev) => (prev -= widthLeft));
         }
      }
   };

   if (windowWidth >= 1024) {
      return (
         <div style={{ position: 'relative' }}>
            <div ref={sliderRef} className={styles.slider}>
               <div
                  style={{
                     left: `${sliderPosition}px`,
                     columnGap: `${gap}px`,
                     height: `${minHeight}px`,
                  }}
                  className={styles.slider__wrapper}>
                  {sliderList.map((el, index) => (
                     <div
                        style={{ flex: `0 0 215px`, minWidth: '215px' }}
                        className={styles.slider__item}
                        key={index}>
                        {el}
                     </div>
                  ))}
               </div>
            </div>
            <button
               className={`${styles.slider__button} ${styles.slider__button_prev}`}
               onClick={scrollToPrev}
               disabled={sliderPosition === 0}>
               <Icon icon="arrow" />
            </button>
            <button
               className={`${styles.slider__button} ${styles.slider__button_next}`}
               onClick={scrollToNext}
               disabled={scrollingWidth === Math.abs(sliderPosition)}>
               <Icon icon="arrow" />
            </button>
         </div>
      );
   }

   return (
      <div className={styles.slider} style={{ padding: '0px' }}>
         <div className={styles.slider__wrapper} style={{ columnGap: '8px' }}>
            {sliderList.map((el, index) => (
               <div
                  style={{ flex: `0 0 140px`, width: '140px' }}
                  className={styles.slider__item}
                  key={index}>
                  {el}
               </div>
            ))}
         </div>
      </div>
   );
};
