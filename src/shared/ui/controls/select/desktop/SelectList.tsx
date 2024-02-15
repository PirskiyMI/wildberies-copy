import { Dispatch, FC, SetStateAction } from 'react';

import styles from './styles.module.scss';

export type Option = {
   value: string;
   title: string;
};

type SelectListProps = {
   value: string;
   setValue: Dispatch<SetStateAction<string>>;
   setSort: Dispatch<SetStateAction<string>>;
   options: Option[];
};

export const SelectList: FC<SelectListProps> = ({ options, setSort, value, setValue }) => {
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
