import { FC, ReactNode, memo } from 'react';
import styles from './styles.module.scss';
import { IButtonProps } from 'src/shared/lib/types/types-ui/button-types';


export const CounterButton: FC<IButtonProps> = memo(
   ({ children, clickHandler, className, disabled = false }) => {
      const classes = className ? `${className} ${styles.button}` : styles.button;

      return (
         <button disabled={disabled} className={classes} onClick={clickHandler}>
            {children}
         </button>
      );
   },
);
