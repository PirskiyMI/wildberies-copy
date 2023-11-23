import styles from './Header.module.scss';

import { FC } from 'react';

import { HeaderLabel } from './HeaderLabel';
import { HeaderForm } from './HeaderForm';
import { HeaderNavigation } from './HeaderNavigation';
import { useResize } from '../../../shared/lib';

import { HeaderMobileMenu } from './HeaderMobileMenu';
import { HeaderMobile } from './HeaderMobile';

export const Header: FC = () => {
   const { width } = useResize();

   if (width >= 1024) {
      return (
         <header className={styles.header}>
            <div className={`${styles.header__container} container`}>
               <HeaderLabel />
               <HeaderForm />
               <HeaderNavigation />
            </div>
         </header>
      );
   }

   return (
      <header className={styles.header}>
         <HeaderMobile />
         <HeaderMobileMenu />
      </header>
   );
};
