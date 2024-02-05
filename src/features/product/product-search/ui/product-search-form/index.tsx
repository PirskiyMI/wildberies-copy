import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon, SearchField } from 'src/shared';

import styles from './styles.module.scss';
import { useSearch } from '../../hooks';

export const ProductSearch: FC = () => {
   const { searchValue, setSearchValue, searchHandler, clearHandler } = useSearch();

   return (
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
         <SearchField
            value={searchValue}
            setValue={setSearchValue}
            ClearButton={
               <button onClick={clearHandler}>
                  <Icon icon="cross" />
               </button>
            }
            SearchButton={
               <button onClick={searchHandler}>
                  <Link to={'/'}>
                     <Icon icon="loop" />
                  </Link>
               </button>
            }
         />
      </form>
   );
};
