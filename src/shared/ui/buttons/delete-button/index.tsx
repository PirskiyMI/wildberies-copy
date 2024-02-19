import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';
import { IButtonProps } from 'src/shared/lib/types/types-ui/button-types';

export const DeleteButton: FC<IButtonProps> = ({ clickHandler, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <button onClick={clickHandler} className={classes}>
         <Icon icon={'trash'} />
      </button>
   );
};
