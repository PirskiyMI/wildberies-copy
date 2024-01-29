import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';

type Props = {
   clickHandler: () => void;
   isFill?: boolean;
   className?: string;
};

export const FavoriteButton: FC<Props> = ({ clickHandler, isFill, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;
   const icon = isFill ? 'like-fill' : 'like';

   return (
      <button onClick={clickHandler} className={classes}>
         <Icon icon={icon} className={styles.button__icon} />
      </button>
   );
};
