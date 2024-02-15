import { FC } from 'react';

import styles from './styles.module.scss';

import { Icon } from '../../icon';

interface IProps {
   clickHandler: () => void;
   isOpen?: boolean;
   className?: string;
}

export const Burger: FC<IProps> = ({ clickHandler, className }) => {
   const classes = className ? `${className} ${styles.burger}` : styles.burger;

   return (
      <button className={classes} onClick={clickHandler}>
         <Icon icon="burger" />
      </button>
   );
};
