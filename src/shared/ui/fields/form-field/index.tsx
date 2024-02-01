import { FC, HTMLAttributes, useState } from 'react';

import styles from './styles.module.scss';

interface FieldProps extends HTMLAttributes<HTMLInputElement> {
   value: string | number;
   title: string;
   errorText: string;
}

export const Field: FC<FieldProps> = ({ value, title, errorText, ...props }) => {
   const [isFocus, setFocus] = useState(false);

   const inputClasses = `${styles.field__input} ${errorText && styles.field__input_error}`;
   const labelClasses = `${styles.field__label} ${
      (value || isFocus) && styles.field__label_active
   } ${errorText && styles.field__label_error}`;

   return (
      <label
         className={styles.field}
         onFocus={() => {
            setFocus(true);
         }}
         onBlur={() => {
            setFocus(false);
         }}>
         <input className={inputClasses} value={value} {...props} />
         <span className={labelClasses}>{title}</span>
         {errorText && <span className={styles.field__error}>{errorText}</span>}
      </label>
   );
};
