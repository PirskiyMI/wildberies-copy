import { FC } from 'react';

import styles from './styles.module.scss';

import { useAppSelector } from '../../../../shared/lib';
import { SearchForm } from '../../../../features/search';
import { ToggleSearchField } from '../../../../features/search/ui/toggle-search';
import { Logo } from '../../../../shared/ui';

export const HeaderMobile: FC = () => {
   const { isOpen } = useAppSelector((state) => state.searchReducer);

   return (
      <>
         {isOpen && (
            <div className={styles.header__search}>
               <div className={`${styles.header__container} container`}>
                  <SearchForm />
                  <ToggleSearchField isOpen={isOpen} />
               </div>
            </div>
         )}
         <div className={`${styles.header__container} container`}>
            <Logo />
            <ToggleSearchField isOpen={isOpen} />
         </div>
      </>
   );
};
