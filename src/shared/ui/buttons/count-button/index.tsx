import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
   children: ReactNode;
   onClick: () => void;
   disabled?: boolean;
   className?: string;
};

export const CountButton: FC<Props> = ({ children, onClick, className, disabled = false }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <button disabled={disabled} className={classes} onClick={onClick}>
         {children}
      </button>
   );
};
