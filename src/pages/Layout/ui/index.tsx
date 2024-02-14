import { FC, Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Preloader, useAppSelector, useScrollToTop, windowWidthSelector } from 'src/shared';
import { HeaderContainer } from 'src/widgets/header';
import { FooterContainer } from 'src/widgets/footer';
import { NavMenu } from 'src/widgets/nav-menu';

import styles from './styles.module.scss';

const ScrollUp = lazy(async () => {
   const { ScrollUp } = await import('src/features/scroll-up');
   return { default: ScrollUp };
});
const MobileNavMenu = lazy(async () => {
   const { MobileNavMenuContainer } = await import('src/widgets/mobile-nav-menu');
   return { default: MobileNavMenuContainer };
});

export const Layout: FC = () => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const windowWidth = useAppSelector(windowWidthSelector);
   const { isButtonVisible } = useScrollToTop();

   if (!windowWidth) return null;
   if (windowWidth >= 1024) {
      return (
         <>
            <AnimatePresence>{isOpen && <NavMenu />}</AnimatePresence>
            <HeaderContainer />
            <main className={styles.layout__main}>
               <Suspense fallback={<Preloader />}>
                  <Outlet />
               </Suspense>
            </main>
            {isButtonVisible && <ScrollUp />}
            <FooterContainer />
         </>
      );
   }

   return (
      <>
         <HeaderContainer />
         <main className={styles.layout__main}>
            <Suspense fallback={<Preloader />}>
               <Outlet />
            </Suspense>
         </main>
         {/* <MobileNavMenu /> */}
         <FooterContainer />
      </>
   );
};
