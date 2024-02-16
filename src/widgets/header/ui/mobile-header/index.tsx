import { FC } from 'react';

import { Logo } from 'src/shared';
import { MobileProductSearch } from 'src/features/product/product-search';

import styles from './styles.module.scss';

export const Header: FC = () => {
   return (
      <div className={styles.header}>
         <div className={`${styles.header__container} container`}>
            <Logo />
            <MobileProductSearch />
         </div>
      </div>
   );
};
