import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Preloader, useAppSelector, useScrollToTop } from 'src/shared';
import { ScrollUp } from 'src/features/scroll-up';
import { DesktopHeader, MobileHeader } from 'src/widgets/header';
import { DesktopFooter, MobileFooter } from 'src/widgets/footer';
import { DesktopNavMenu } from 'src/widgets/nav-menu';
import { MobileNavMenu } from 'src/widgets/mobile-nav-menu/ui';

import styles from './styles.module.scss';
import { clientTypeSelector } from 'src/shared/model/selectors/client-selectors';

export const Layout: FC = () => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const clientType = useAppSelector(clientTypeSelector);
   const { isButtonVisible } = useScrollToTop();

   return (
      <>
         <Suspense fallback>
            {clientType === 'desktop' && (
               <AnimatePresence>{isOpen && <DesktopNavMenu />}</AnimatePresence>
            )}
         </Suspense>

         <Suspense fallback>
            {clientType !== 'unknown' ? (
               clientType === 'desktop' ? (
                  <DesktopHeader />
               ) : (
                  <MobileHeader />
               )
            ) : null}
         </Suspense>
         <main className={styles.layout__main}>
            <Suspense fallback={<Preloader />}>
               <Outlet />
            </Suspense>
         </main>
         {isButtonVisible && <ScrollUp />}
         <Suspense>
            {clientType !== 'unknown' && clientType === 'mobile' && <MobileNavMenu count={1} />}
         </Suspense>
         <Suspense fallback>
            {clientType !== 'unknown' ? (
               clientType === 'desktop' ? (
                  <DesktopFooter />
               ) : (
                  <MobileFooter />
               )
            ) : null}
         </Suspense>
      </>
   );
};
