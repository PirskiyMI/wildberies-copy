import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { Option, SelectList } from './SelectList';

type SelectProps = {
   defaultValue: string;
   setSort: Dispatch<SetStateAction<string>>;
   options: Option[];
   className?: string;
};

export const Select: FC<SelectProps> = ({ defaultValue, options, setSort, className }) => {
   const [value, setValue] = useState(defaultValue);
   const [isOpen, setIsOpen] = useState(false);

   const classes = className ? `${styles.select} ${className}` : styles.select;

   const closeSelect = () => {
      setIsOpen(false);
   };

   useEffect(() => {
      document.addEventListener('click', closeSelect);
      return () => {
         document.removeEventListener('click', closeSelect);
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
