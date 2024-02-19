import { FC } from 'react';

import styles from './styles.module.scss';
import { Icon } from '../..';
import { IButtonProps } from '../../../lib/types/types-ui/button-types';

export const DeleteButtonSmall: FC<IButtonProps> = ({ clickHandler, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <div className={classes} onClick={clickHandler}>
         <Icon className={styles.button__icon} icon="cross" />
      </div>
   );
};
