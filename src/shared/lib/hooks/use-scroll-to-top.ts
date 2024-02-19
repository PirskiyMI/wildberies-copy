import { useEffect, useState } from 'react';
import { clientActions, useAppDispatch, useAppSelector } from 'src/shared';
import { clientTypeSelector } from 'src/shared/model/selectors/client-selectors';

export const useScrollToTop = () => {
   const [isButtonVisible, setIsButtonVisible] = useState(false);
   const { setClient } = clientActions;
   const clientType = useAppSelector(clientTypeSelector);
   const dispatch = useAppDispatch();

   const resizeHandler = () => {
      if (window.innerWidth >= 1024 && clientType !== 'desktop') {
         dispatch(setClient('desktop'));
      } else if (window.innerWidth < 1024 && clientType !== 'mobile') {
         dispatch(setClient('mobile'));
      }
      /* dispatch(setWindowWidth(window.innerWidth)); */
   };
   const scrollHandler = () => {
      if (window.scrollY > window.innerHeight && !isButtonVisible) {
         setIsButtonVisible(true);
      } else if (window.scrollY < window.innerHeight && isButtonVisible) {
         setIsButtonVisible(false);
      }
   };

   useEffect(() => {
      resizeHandler();
      window.addEventListener('resize', resizeHandler);
      return () => {
         window.removeEventListener('resize', resizeHandler);
      };
   });
   useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
      return () => {
         window.removeEventListener('scroll', scrollHandler);
      };
   }, [isButtonVisible]);

   return { isButtonVisible };
};
