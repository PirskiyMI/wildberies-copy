import { FC } from 'react';

import styles from './styles.module.scss';

import { useAppSelector } from 'src/shared';
import { SearchForm } from 'src/features/search';

import { HeaderLabel } from '../header-label';
import { HeaderNavigation } from '../header-nav';
import { HeaderMobileMenu } from '../header-mobile-menu';
import { HeaderMobile } from './HeaderMobile';

export const Header: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
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
