import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
   isChangeButton?: boolean;
   children: ReactNode;
   className?: string;
}

export const Button: FC<ButtonProps> = ({ children, isChangeButton, className, ...props }) => {
   if (isChangeButton) {
      return (
         <button className={styles.button_change} {...props}>
            {children}
         </button>
      );
   }
   return (
      <button className={`${styles.button} ${className}`} {...props}>
         {children}
      </button>
   );
};
