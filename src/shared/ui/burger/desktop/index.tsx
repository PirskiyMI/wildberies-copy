import { FC } from 'react';

import styles from './styles.module.scss';

import { Icon } from '../../icon';
import { IBurgerProps } from 'src/shared/lib/types/types-ui/burger-types';


export const Burger: FC<IBurgerProps> = ({ clickHandler, className }) => {
   const classes = className ? `${className} ${styles.burger}` : styles.burger;

   return (
      <button className={classes} onClick={clickHandler}>
         <Icon icon="burger" className={styles.burger__icon} />
      </button>
   );
};
