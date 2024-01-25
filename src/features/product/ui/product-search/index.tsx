import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon, SearchField, setSearch, useAppDispatch } from 'src/shared';

import styles from './styles.module.scss';

export const ProductSearch: FC = () => {
   const [value, setValue] = useState<string>('');
   const dispatch = useAppDispatch();

   const searchHandler = () => {
      dispatch(setSearch(value));
   };
   const clearHandler = () => {
      setValue('');
      dispatch(setSearch(''));
   };

   return (
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
         <SearchField
            value={value}
            setValue={setValue}
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
