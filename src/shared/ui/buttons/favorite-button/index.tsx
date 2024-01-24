import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';

type Props = {
   clickHandler: () => void;
   isFavorite: boolean;
   className?: string;
   
};

export const FavoriteButton: FC<Props> = ({ clickHandler, isFavorite, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;
   const icon = isFavorite ? 'like-fill' : "like"
   return (
      <button onClick={clickHandler} className={classes}>
         <Icon icon={icon} />
      </button>
   );
};
