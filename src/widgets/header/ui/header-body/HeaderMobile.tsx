import { FC } from 'react';

import { Logo, useAppSelector } from 'src/shared';
import { ProductSearch } from 'src/features/product';

import styles from './styles.module.scss';

export const HeaderMobile: FC = () => {
   const { isOpen } = useAppSelector((state) => state.searchReducer);

   return (
      <>
         {isOpen && (
            <div className={styles.header__search}>
               <div className={`${styles.header__container} container`}>
                  <ProductSearch />
               </div>
            </div>
         )}
         <div className={`${styles.header__container} container`}>
            <Logo />
         </div>
      </>
   );
};
