import { Dispatch, FC, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';
import { useAppSelector } from '../../lib';

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

const selectElement = document.getElementById('select')!;

export const SelectList: FC<SelectListProps> = ({ options, setSort, value, setValue }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
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
   }

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
         <div className={styles.background} />
      </>,
      selectElement,
   );
};
