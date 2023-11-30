import styles from './Header.module.scss';

import { FC } from 'react';

import { HeaderLabel } from '../header-label/HeaderLabel';
import { HeaderNavigation } from '../header-nav/HeaderNavigation';
import { useResize } from '../../../../shared/lib';

import { HeaderMobileMenu } from '../header-mobile-menu/HeaderMobileMenu';
import { HeaderMobile } from './HeaderMobile';
import { SearchForm } from '../../../../features/search';

export const Header: FC = () => {
   const { width } = useResize();

   if (width >= 1024) {
      return (
         <header className={styles.header}>
            <div className={`${styles.header__container} container`}>
               <HeaderLabel />
               <SearchForm />
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
