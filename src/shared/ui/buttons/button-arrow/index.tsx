import { FC } from 'react';

import styles from './styles.module.scss';
import { Icon } from '../..';

interface IProps {
   clickHandler?: () => void;
   className?: string;
}

export const ButtonArrow: FC<IProps> = ({ clickHandler, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <button className={classes} onClick={clickHandler}>
         <Icon icon="arrow" className={styles.button__icon} />
      </button>
   );
};
