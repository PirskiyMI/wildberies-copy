import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';
import { IButtonProps } from 'src/shared/lib/types/types-ui/button-types';


export const FavoriteButton: FC<IButtonProps> = ({ clickHandler, isFill, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;
   const icon = isFill ? 'heart-fill' : 'heart';

   return (
      <button onClick={clickHandler} className={classes}>
         <Icon icon={icon} className={styles.button__icon} />
      </button>
   );
};
