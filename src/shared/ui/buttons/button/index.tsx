import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   disabled?: boolean;
   className?: string;
}

export const Button: FC<IProps> = ({ children, disabled = false, className, ...props }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <button disabled={disabled} className={classes} {...props}>
         {children}
      </button>
   );
};
