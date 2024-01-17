import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';

type Props = {
   clickHandler: () => void;
   className?: string;
};

export const FavoriteButton: FC<Props> = ({ clickHandler, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <button onClick={clickHandler} className={classes}>
         <Icon icon="like" />
      </button>
   );
};