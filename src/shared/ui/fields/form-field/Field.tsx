import { FC, HTMLAttributes, useState } from 'react';
import styles from './Field.module.scss';

interface FieldProps extends HTMLAttributes<HTMLInputElement> {
   value: string | number;
   title: string;
   errorText: string;
}

export const Field: FC<FieldProps> = ({ value, title, errorText, ...props }) => {
   const [isFocus, setFocus] = useState(false);

   return (
      <label
         className={styles.field}
         onFocus={() => {
            setFocus(true);
         }}
         onBlur={() => {
            setFocus(false);
         }}>
         <input
            className={`${styles.field__input} ${errorText && styles.field__input_error}`}
            value={value}
            {...props}
         />
         <span
            className={`${styles.field__label} ${
               (value || isFocus) && styles.field__label_active
            } ${errorText && styles.field__label_error}`}>
            {title}
         </span>
         {errorText && <span className={styles.field__error}>{errorText}</span>}
      </label>
   );
};
