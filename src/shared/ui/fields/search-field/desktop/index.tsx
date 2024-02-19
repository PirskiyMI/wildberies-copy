import { ChangeEvent, FC, } from 'react';

import styles from './styles.module.scss';
import { ISearchFieldProps } from 'src/shared/lib/types/types-ui/search-field-types';



export const SearchField: FC<ISearchFieldProps> = ({ value, setValue, ClearButton, SearchButton }) => {
   const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   return (
      <>
         <input
            className={styles.field}
            type="text"
            placeholder="Я ищу..."
            value={value}
            onChange={changeHandler}
         />
         <div className={`${styles.field__button} ${styles.field__button_loop}`}>
            {SearchButton}
         </div>
         {value && (
            <div className={`${styles.field__button} ${styles.field__button_cross}`}>
               {ClearButton}
            </div>
         )}
      </>
   );
};
