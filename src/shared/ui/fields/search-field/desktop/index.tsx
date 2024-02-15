import { ChangeEvent, Dispatch, FC, ReactNode, SetStateAction } from 'react';

import styles from './styles.module.scss';

type Props = {
   value: string;
   setValue: Dispatch<SetStateAction<string>>;
   ClearButton: ReactNode;
   SearchButton: ReactNode;
};

export const SearchField: FC<Props> = ({ value, setValue, ClearButton, SearchButton }) => {
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
