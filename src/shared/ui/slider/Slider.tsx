import { Children, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Slider.module.scss';
import { useResize } from '../../lib';

type Props = {
   children: ReactNode;
   gap: number;
   minHeight: number;
};

export const Slider: FC<Props> = ({ children, gap, minHeight }) => {
   const { width } = useResize();
   const sliderList = Children.toArray(children);
   const sliderRef = useRef<HTMLDivElement>(null);
   const [wrapperWidth, setWrapperWidth] = useState<number>(0);
   const [sliderPosition, setSliderPosition] = useState<number>(0);
   const [scrollingWidth, setScrollingWidth] = useState<number>(0);

   const [mouseStartPosition, setMouseStart] = useState<number>(0);

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
   }, [gap, sliderList, width]);

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

   return (
      <div ref={sliderRef} className={styles.slider}>
         <div
            style={{ left: `${sliderPosition}px`, columnGap: `${gap}px`, height: `${minHeight}px` }}
            className={styles.slider__wrapper}
            onDragStart={(e) => {
               setMouseStart(e.pageX);
            }}
            onDrag={(e) => {
               const dragStart = e.pageX;
               const dragMove = dragStart - mouseStartPosition;
               if (dragMove !== 0) {
                  setSliderPosition((prev) => (prev += dragMove));
                  // console.log(dragMove);
               }
               setMouseStart(e.pageX);
            }}
            onDragEnd={(e) => {
               setMouseStart(e.pageX);
            }}>
            {sliderList.map((el, index) => (
               <div style={{ flex: `0 0 215px` }} className={styles.slider__item} key={index}>
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
