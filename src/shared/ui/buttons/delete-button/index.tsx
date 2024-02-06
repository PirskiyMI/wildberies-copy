import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';

interface IProps {
   clickHandler: () => void;
   className?: string;
}

export const DeleteButton: FC<IProps> = ({ clickHandler, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <button onClick={clickHandler} className={classes}>
         <Icon icon={'trash'} />
      </button>
   );
};
