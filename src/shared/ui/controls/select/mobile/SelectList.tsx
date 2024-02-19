import { FC } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';
import { ISelectListProps } from 'src/shared/lib/types/types-ui/select-types/select-list-types';


const selectElement = document.getElementById('select')!;

export const SelectList: FC<ISelectListProps> = ({ options, setSort, value, setValue }) => {
   return createPortal(
      <>
         <ul className={styles.select__options}>
            {options.map((el) => (
               <li
                  className={
                     value === el.title
                        ? `${styles.select__option} ${styles.select__option_active}`
                        : styles.select__option
                  }
                  key={el.value}
                  onClick={() => {
                     setValue(el.title);
                     setSort(el.value);
                  }}>
                  {el.title}
               </li>
            ))}
         </ul>
         <div className={styles.backdrop} />
      </>,
      selectElement,
   );
};
