import { FC } from 'react';
import styles from './FavoriteButton.module.scss';
import { Icon } from '../..';

type FavoriteButtonProps = {
   clickHandler: () => void;
};

export const FavoriteButton: FC<FavoriteButtonProps> = ({ clickHandler }) => {
   return (
      <button onClick={clickHandler} className={styles.button}>
         <Icon icon="like" />
      </button>
   );
};
