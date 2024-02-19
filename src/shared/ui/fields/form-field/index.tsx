import { FC, useState } from 'react';

import styles from './styles.module.scss';
import { IFieldProps } from '../../../lib/types/types-ui/form-field-types';

export const Field: FC<IFieldProps> = ({ value, title, errorText, ...props }) => {
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
