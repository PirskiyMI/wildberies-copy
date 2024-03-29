import { FC } from 'react';

import styles from './styles.module.scss';
import { IButtonProps } from '../../../lib/types/types-ui/button-types';

export const Button: FC<IButtonProps> = ({ children, disabled = false, className, ...props }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <button disabled={disabled} className={classes} {...props}>
         {children}
      </button>
   );
};
