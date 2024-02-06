import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Preloader, useAppSelector, useScrollToTop } from 'src/shared';
import { ScrollUp } from 'src/features/scroll-up';
import { Header } from 'src/widgets/header';
import { Footer } from 'src/widgets/footer';
import { NavMenu } from 'src/widgets/nav-menu';

import styles from './styles.module.scss';

export const Layout: FC = () => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { isButtonVisible } = useScrollToTop();

   return (
      <>
         <AnimatePresence>{isOpen && <NavMenu />}</AnimatePresence>
         <Header />
         <main className={styles.layout__main}>
            <Suspense fallback={<Preloader />}>
               <Outlet />
            </Suspense>
         </main>
         {isButtonVisible && windowWidth >= 1024 && <ScrollUp />}
         <Footer />
      </>
   );
};
