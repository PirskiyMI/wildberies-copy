import { FC } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../shared/lib';
import { SearchForm } from '../../../../features/search';
import { ToggleSearchField } from '../../../../features/search/ui/toggle-search/ToggleSearchField';

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
            <Link to="/" className={styles.header__logo}>
               Товары и точка
            </Link>
            <ToggleSearchField isOpen={isOpen} />
         </div>
      </>
   );
};
