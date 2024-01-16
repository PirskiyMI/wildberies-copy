import { FC, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Preloader, ScrollToTop } from '../../../shared/ui';
import { useAppDispatch, useAppSelector } from '../../../shared/lib';
import { BurgerMenu } from '../../../widgets/burger-menu';
import { Header } from '../../../widgets/header';
import { Footer } from '../../../widgets/footer';
import { ProfileNav } from '../../../widgets/profile';
import { Notification } from '../../../entities/notification';

import styles from './Layout.module.scss';
import { menuList } from '../config';
import { setWindowWidth } from '../model';

export const Layout: FC = () => {
   const { isVisible: isActive } = useAppSelector((state) => state.notificationReducer);
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
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
      return () => {
         window.removeEventListener('scroll', scrollHandler);
      };
   }, [isButtonVisible]);

   const { pathname } = useLocation();

   return (
      <>
         <AnimatePresence>
            {isActive && (
               <motion.div
                  initial={{ top: '-100%', left: '50%' }}
                  animate={{ top: '6%' }}
                  exit={{ top: '-100%' }}
                  className={styles.layout__notification}>
                  <Notification />
               </motion.div>
            )}
         </AnimatePresence>
         <BurgerMenu links={menuList} />

         <Header />

         <main className={styles.layout__main}>
            {pathname.includes('profile') && windowWidth >= 1024 && (
               <div className={'container'}>
                  <ProfileNav />
               </div>
            )}
            <Suspense fallback={<Preloader />}>
               <Outlet />
            </Suspense>
         </main>
         {isButtonVisible && windowWidth >= 1024 && <ScrollToTop />}

         <Footer />
      </>
   );
};
