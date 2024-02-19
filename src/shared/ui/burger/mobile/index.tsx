import { FC } from 'react';

import styles from './styles.module.scss';

import { Icon } from '../../icon';
import { IBurgerProps } from 'src/shared/lib/types/types-ui/burger-types';

export const Burger: FC<IBurgerProps> = ({ clickHandler, isOpen, className }) => {
   const classes = className ? `${className} ${styles.burger}` : styles.burger;
   const iconClasses = isOpen
      ? `${styles.burger__icon} ${styles.burger__icon_active}`
      : `${styles.burger__icon}`;

   return (
      <button className={classes} onClick={clickHandler}>
         <Icon icon="burger" className={iconClasses} />
      </button>
   );
};
