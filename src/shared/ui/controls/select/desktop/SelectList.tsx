import { FC } from 'react';

import styles from './styles.module.scss';
import { ISelectListProps } from '../../../../lib/types/types-ui/select-types/select-list-types';

export const SelectList: FC<ISelectListProps> = ({ options, setSort, value, setValue }) => {
   return (
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
   );
};
