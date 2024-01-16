import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { useAppSelector } from '../../lib';
import { createPortal } from 'react-dom';

type Option = {
   value: string;
   title: string;
};

type SelectProps = {
   defaultValue: string;
   setSort: Dispatch<SetStateAction<string>>;
   options: Option[];
   className?: string;
};

type SelectListProps = {
   value: string;
   setValue: Dispatch<SetStateAction<string>>;
   setSort: Dispatch<SetStateAction<string>>;
   options: Option[];
};

const selectElement = document.getElementById('select')!;

const SelectList: FC<SelectListProps> = ({ options, setSort, value, setValue }) => {
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
      </>,
      selectElement,
   );
};

export const Select: FC<SelectProps> = ({ defaultValue, options, setSort, className }) => {
   const [value, setValue] = useState(defaultValue);
   const [isOpen, setIsOpen] = useState(false);

   const classes = className ? `${styles.select} ${className}` : styles.select;

   const openSelect = () => {
      if (isOpen) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener('click', openSelect);
      return () => {
         document.removeEventListener('click', openSelect);
      };
   }, []);

   return (
      <div className={classes} onClick={(e) => e.stopPropagation()}>
         <div
            className={styles.select__wrapper}
            onClick={() => setIsOpen((prev) => (prev = !prev))}>
            <div className={styles.select__output}>{value}</div>
            {isOpen && (
               <SelectList options={options} setSort={setSort} value={value} setValue={setValue} />
            )}
         </div>
      </div>
   );
};
