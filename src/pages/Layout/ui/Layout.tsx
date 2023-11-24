import styles from './Layout.module.scss';

import { FC, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { menuList } from '../config/data';
import { Backdrop, Notification, Preloader } from '../../../shared/ui';
import { useAppSelector } from '../../../shared/lib';
import { Menu } from '../../../widgets/menu';
import { Header } from '../../../widgets/header';
import { Footer } from '../../../widgets/footer';
import { ProductModal } from '../../../widgets/product-modal';

export const Layout: FC = () => {
   const { isVisible: isActive } = useAppSelector((state) => state.notificationReducer);
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const { isOpen } = useAppSelector((state) => state.burgerReducer);

   const location = useLocation();
   console.log(location);

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
         {isModalOpen && <ProductModal />}
         <Menu links={menuList} />
         {isModalOpen || isOpen ? <Backdrop /> : null}

         <Header />
         <main className={styles.layout__main}>
            <Suspense fallback={<Preloader />}>
               <Outlet />
            </Suspense>
         </main>
         <Footer />
      </>
   );
};
