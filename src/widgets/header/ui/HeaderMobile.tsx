import { FC } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ToggleSearchField } from '../../../features/search-field';
import { useAppSelector } from '../../../shared/lib';
import { HeaderForm } from './HeaderForm';

export const HeaderMobile: FC = () => {
   const { isOpen } = useAppSelector((state) => state.searchReducer);

   return (
      <>
         {isOpen && (
            <div className={styles.header__search}>
               <div className={`${styles.header__container} container`}>
                  <HeaderForm />
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
