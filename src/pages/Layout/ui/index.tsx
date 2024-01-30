import { FC, Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import {
   Notification,
   Preloader,
   ScrollToTop,
   setWindowWidth,
   useAppDispatch,
   useAppSelector,
} from 'src/shared';
import { Header } from 'src/widgets/header';
import { Footer } from 'src/widgets/footer';
import { NavMenu } from 'src/widgets/nav-menu';

import styles from './styles.module.scss';

export const Layout: FC = () => {
   const { isVisible: isActive } = useAppSelector((state) => state.notificationReducer);
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const [isButtonVisible, setIsButtonVisible] = useState(false);
   const dispatch = useAppDispatch();

   const resizeHandler = () => {
      dispatch(setWindowWidth(window.innerWidth));
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

   return (
      <>
         <AnimatePresence>
            {isActive && (
               <motion.div
                  initial={{ top: '-100%', left: '50%' }}
                  animate={{ top: '6%' }}
                  exit={{ top: '-100%' }}
                  className={styles.layout__notification}>
                  <Notification title="Товар добавлен в корзину" />
               </motion.div>
            )}
         </AnimatePresence>
         <AnimatePresence>{isOpen && <NavMenu />}</AnimatePresence>

         <Header />

         <main className={styles.layout__main}>
            <Suspense fallback={<Preloader />}>
               <Outlet />
            </Suspense>
         </main>

         {isButtonVisible && windowWidth >= 1024 && (
            <ScrollToTop className={styles.layout__button} />
         )}
         <Footer />
      </>
   );
};
