import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Preloader, useAppSelector, useScrollToTop, windowWidthSelector } from 'src/shared';
import { ScrollUp } from 'src/features/scroll-up';
import { DesktopHeader, MobileHeader } from 'src/widgets/header';
import { DesktopFooter, MobileFooter } from 'src/widgets/footer';
import { NavMenu } from 'src/widgets/nav-menu';
import { MobileNavMenu } from 'src/widgets/mobile-nav-menu/ui';

import styles from './styles.module.scss';

export const Layout: FC = () => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const windowWidth = useAppSelector(windowWidthSelector);
   const { isButtonVisible } = useScrollToTop();

   return (
      <>
         <AnimatePresence>{isOpen && <NavMenu />}</AnimatePresence>
         <Suspense fallback>
            {windowWidth && windowWidth >= 1024 ? <DesktopHeader /> : <MobileHeader />}
         </Suspense>
         <main className={styles.layout__main}>
            <Suspense fallback={<Preloader />}>
               <Outlet />
            </Suspense>
         </main>
         {isButtonVisible && <ScrollUp />}
         <Suspense>{windowWidth && windowWidth < 1024 && <MobileNavMenu count={1} />}</Suspense>
         <Suspense fallback>
            {windowWidth && windowWidth >= 1024 ? <DesktopFooter /> : <MobileFooter />}
         </Suspense>
      </>
   );
};
