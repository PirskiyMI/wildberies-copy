import { FC } from 'react';

import { Logo } from 'src/shared';
import { ProductSearch } from 'src/features/product/product-search';

import styles from './styles.module.scss';

export const HeaderMobile: FC = () => {
   return (
      <div className={styles.header__search}>
         <div className={`${styles.header__container} container`}>
            <Logo />
            <ProductSearch />
         </div>
      </div>
   );
};
